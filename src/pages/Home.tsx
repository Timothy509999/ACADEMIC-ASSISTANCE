import CanvasBackground from "../sections/CanvasBackground";
import Navigation from "../sections/Navigation";
import HeroSection from "../sections/HeroSection.tsx";
import PaymentSection from "../sections/PaymentSection";
import AssignmentSection from "../sections/AssignmentSection";
import EcosystemSection from "../sections/EcosystemSection";

export default function Home({
  theme,
  setTheme,
}: {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}) {
  const isDark = theme === "dark";

  const toggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="relative min-h-screen bg-brand-cream">
      <CanvasBackground />
      <Navigation />

      <main className="relative">
        <HeroSection theme={theme} setTheme={setTheme} />
        <PaymentSection />
        <AssignmentSection />
        <EcosystemSection />
      </main>

      {/* ── Bottom-left Theme Toggle ── */}
      <button
        onClick={toggle}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: isDark ? "#1a2e1a" : "#ffffff",
          border: `1.5px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`,
          borderRadius: "999px",
          padding: "8px 14px 8px 10px",
          cursor: "pointer",
          boxShadow: isDark
            ? "0 4px 20px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.2)"
            : "0 4px 20px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
          transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
          outline: "none",
          userSelect: "none",
          backdropFilter: "blur(8px)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-2px) scale(1.04)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(0) scale(1)";
        }}
        onMouseDown={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(0) scale(0.97)";
        }}
        onMouseUp={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-2px) scale(1.04)";
        }}
      >
        {/* Emoji icon */}
        <span
          style={{
            fontSize: "14px",
            lineHeight: 1,
            transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: isDark ? "rotate(180deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          {isDark ? "🌙" : "☀️"}
        </span>

        {/* Pill track */}
        <div
          style={{
            width: "36px",
            height: "20px",
            borderRadius: "999px",
            background: isDark ? "#3d7a3d" : "#d1d5db",
            position: "relative",
            transition: "background 0.3s ease",
            flexShrink: 0,
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          {/* Sliding thumb */}
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: isDark ? "#68b768" : "#ffffff",
              position: "absolute",
              top: "2px",
              left: "3px",
              transform: isDark ? "translateX(16px)" : "translateX(0)",
              transition:
                "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease",
              boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
            }}
          />
        </div>

        {/* Label */}
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)",
            whiteSpace: "nowrap",
            transition: "color 0.2s",
          }}
        >
          {isDark ? "Dark" : "Light"}
        </span>
      </button>

      {/* Footer */}
      <footer
        className="relative bg-gray-900 text-white py-12 px-6 md:px-12"
        style={{ zIndex: 60 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-xl bg-brand-green flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" />
                  </svg>
                </div>
                <span className="font-bold text-lg">AI Academic Assistant</span>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Empowering students and lecturers with intelligent, campus-aware
                assistance. Built for African universities, designed for
                academic success.
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <h4 className="font-semibold text-sm mb-3">Features</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a
                      href="#course-qa"
                      className="hover:text-white transition-colors"
                    >
                      Course Q&A
                    </a>
                  </li>
                  <li>
                    <a
                      href="#payments"
                      className="hover:text-white transition-colors"
                    >
                      Payments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#assignments"
                      className="hover:text-white transition-colors"
                    >
                      Assignments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ecosystem"
                      className="hover:text-white transition-colors"
                    >
                      FAQ & Support
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Documentation</li>
                  <li>API Reference</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-3">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>support@university.edu</li>
                  <li>+234 800 123 4567</li>
                  <li>Student Affairs Office</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2026 AI Academic Assistant. Pilot System. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-400">System Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}