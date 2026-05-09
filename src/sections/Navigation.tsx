import { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Course Q&A', href: '#course-qa' },
  { label: 'Payments', href: '#payments' },
  { label: 'Assignments', href: '#assignments' },
  { label: 'Ecosystem', href: '#ecosystem' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                isScrolled ? 'bg-brand-green' : 'bg-white/20 backdrop-blur-sm'
              }`}
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              AI Academic
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-brand-green hover:bg-brand-green/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95 ${
                isScrolled
                  ? 'bg-brand-green text-white hover:bg-brand-green/90'
                  : 'bg-white text-brand-green hover:bg-white/90'
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-brand-green/5 hover:text-brand-green transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full px-5 py-3 rounded-xl bg-brand-green text-white font-semibold hover:bg-brand-green/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
