import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, BookOpen, MessageCircle, CreditCard, ClipboardList } from 'lucide-react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  const dissolveFactor = Math.min(scrollY / (window.innerHeight * 0.6), 1);
  const brightness = 1 + dissolveFactor * 0.3;

  const features = [
    { icon: MessageCircle, label: 'Course Q&A' },
    { icon: CreditCard, label: 'Payments' },
    { icon: ClipboardList, label: 'Assignments' },
    { icon: BookOpen, label: 'Study Guide' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: 10 }}
    >
      {/* Video/Image Background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity: 1 - dissolveFactor * 0.7,
          filter: `brightness(${brightness})`,
          transform: `scale(${1 + dissolveFactor * 0.05})`,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-bg.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <Sparkles className="w-4 h-4 text-brand-amber" />
          <span className="text-white/90 text-sm font-medium tracking-wide">Pilot System</span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Your Academic
          <br />
          <span className="text-brand-amber">Companion</span>
        </h1>

        <p
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          From course confusion to campus clarity. AI-powered assistance for students and lecturers.
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${0.9 + index * 0.1}s` }}
            >
              <feature.icon className="w-4 h-4 text-brand-amber" />
              <span className="text-white/90 text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </div>

        <a
          href="#course-qa"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-green text-white font-semibold hover:bg-brand-green/90 active:scale-95 transition-all duration-300 shadow-lg animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >
          Get Started
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Dissolve Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: dissolveFactor,
          background: `
            linear-gradient(90deg, #3D5A40 1px, transparent 1px) 0 0 / 80px 80px,
            linear-gradient(0deg, #3D5A40 1px, transparent 1px) 0 0 / 80px 80px
          `,
          mixBlendMode: 'multiply',
        }}
      />
    </section>
  );
}
