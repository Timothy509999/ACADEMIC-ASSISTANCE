import { useEffect, useRef } from 'react';

interface ScribbleAgent {
  x: number;
  y: number;
  points: { x: number; y: number }[];
  phase: number;
  freq: number;
  speed: number;
  color: string;
  opacity: number;
}

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const agents: ScribbleAgent[] = [];
    const colors = ['#3D5A40', '#E8A043', '#3D5A40', '#E8A043'];

    for (let i = 0; i < 60; i++) {
      agents.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        points: [],
        phase: Math.random() * Math.PI * 2,
        freq: 0.2 + Math.random() * 0.5,
        speed: 0.3 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.08 + Math.random() * 0.12,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      agents.forEach((agent) => {
        agent.x += Math.sin(time * agent.freq + agent.phase) * agent.speed;
        agent.y += Math.cos(time * agent.freq * 0.7 + agent.phase) * agent.speed;

        if (agent.x < -50) agent.x = canvas.width + 50;
        if (agent.x > canvas.width + 50) agent.x = -50;
        if (agent.y < -50) agent.y = canvas.height + 50;
        if (agent.y > canvas.height + 50) agent.y = -50;

        agent.points.push({ x: agent.x, y: agent.y });
        if (agent.points.length > 20) agent.points.shift();

        if (agent.points.length > 2) {
          ctx.beginPath();
          ctx.moveTo(agent.points[0].x, agent.points[0].y);

          for (let i = 1; i < agent.points.length - 1; i++) {
            const xc = (agent.points[i].x + agent.points[i + 1].x) / 2;
            const yc = (agent.points[i].y + agent.points[i + 1].y) / 2;
            ctx.quadraticCurveTo(agent.points[i].x, agent.points[i].y, xc, yc);
          }

          ctx.strokeStyle = agent.color;
          ctx.globalAlpha = agent.opacity;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        // Draw small connecting dots
        ctx.beginPath();
        ctx.arc(agent.x, agent.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = agent.color;
        ctx.globalAlpha = agent.opacity * 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
