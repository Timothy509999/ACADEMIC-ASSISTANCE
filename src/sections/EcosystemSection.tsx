import { useState } from "react";
import {
  GraduationCap,
  CalendarDays,
  BookOpen,
  Clock,
  FileText,
  Award,
  ChevronDown,
  HelpCircle,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

interface FAQItem {
  id: string;
  icon: React.ElementType;
  title: string;
  color: string;
  questions: { q: string; a: string }[];
}

const ecosystemItems: FAQItem[] = [
  {
    id: "registration",
    icon: GraduationCap,
    title: "Registration",
    color: "#3D5A40",
    questions: [
      {
        q: "How do I register for a new semester?",
        a: 'Log into the student portal, navigate to "Course Registration", select your desired courses, and submit. Confirmation arrives within 24 hours.',
      },
      {
        q: "What is the course add/drop deadline?",
        a: "Add/drop period closes 2 weeks after semester begins. Late registration requires department approval and a fee.",
      },
      {
        q: "Can I change my major online?",
        a: "Major changes require a formal request to your department head. The AI assistant can help draft your request letter.",
      },
    ],
  },
  {
    id: "deadlines",
    icon: CalendarDays,
    title: "Deadlines",
    color: "#E8A043",
    questions: [
      {
        q: "When are tuition fees due?",
        a: "Full tuition payment is due 2 weeks before semester starts. Payment plans available through the bursar office.",
      },
      {
        q: "What is the exam registration deadline?",
        a: "Exam registration opens 4 weeks before exams and closes 1 week prior. No late registrations accepted.",
      },
      {
        q: "How do I request a deadline extension?",
        a: "Submit an extension request with supporting documentation via the student portal at least 48 hours before the deadline.",
      },
    ],
  },
  {
    id: "library",
    icon: BookOpen,
    title: "Library Access",
    color: "#5B8C5E",
    questions: [
      {
        q: "How do I access online journals?",
        a: "Use your student ID to log into the digital library. Access includes 50,000+ journals and research databases.",
      },
      {
        q: "What are the library opening hours?",
        a: "Main library: Mon-Fri 7AM-10PM, Sat 9AM-6PM, Sun 12PM-6PM. 24-hour reading rooms available during exams.",
      },
      {
        q: "How do I reserve a study room?",
        a: "Book through the library app up to 2 weeks in advance. Group rooms require 3+ students.",
      },
    ],
  },
  {
    id: "exams",
    icon: Clock,
    title: "Exam Timetable",
    color: "#D4933A",
    questions: [
      {
        q: "When will the exam timetable be released?",
        a: "Final exam schedules are published 4 weeks before the exam period begins on the student portal.",
      },
      {
        q: "Can I reschedule an exam?",
        a: "Exam rescheduling is only permitted for documented medical emergencies or university-sanctioned events.",
      },
      {
        q: "Where can I find past exam papers?",
        a: "Past papers are available in the library digital archive and through the course Q&A assistant for 5 years of records.",
      },
    ],
  },
  {
    id: "transcripts",
    icon: FileText,
    title: "Transcripts",
    color: "#3D5A40",
    questions: [
      {
        q: "How do I request an official transcript?",
        a: "Submit a request via the registrar portal. Processing takes 3-5 business days. Digital copies available instantly.",
      },
      {
        q: "Is there a fee for transcripts?",
        a: "First 3 transcripts per year are free. Subsequent copies cost ₦2,000 each for official sealed transcripts.",
      },
      {
        q: "Can employers verify my degree online?",
        a: "Yes, the university provides a secure online verification portal for employers and institutions.",
      },
    ],
  },
  {
    id: "scholarships",
    icon: Award,
    title: "Scholarships",
    color: "#E8A043",
    questions: [
      {
        q: "What scholarships are available?",
        a: "Merit-based, need-based, sports, and research scholarships. The AI can match you with opportunities based on your profile.",
      },
      {
        q: "When is the scholarship application deadline?",
        a: "Most scholarship applications open in January and close in March for the following academic year.",
      },
      {
        q: "How do I check my scholarship status?",
        a: "Track your application in real-time through the financial aid portal with automated status updates.",
      },
    ],
  },
];

export default function EcosystemSection() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  return (
    <section
      id="ecosystem"
      className="relative min-h-screen bg-white"
      style={{ zIndex: 50 }}
    >
      <div className="sticky top-0 h-screen flex flex-col">
        {/* Section Header */}
        <div className="flex-none pt-8 pb-4 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-brand-green" />
              </div>
              <span className="font-mono text-xs text-brand-green uppercase tracking-wider">
                Feature 04
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              The Full Ecosystem
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Everything you need to navigate campus life. Quick answers to
              common questions about school processes.
            </p>
          </div>
        </div>

        {/* Ecosystem Grid */}
        <div className="flex-1 px-6 md:px-12 pb-6 overflow-y-auto scrollbar-hide">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ecosystemItems.map((item) => {
                const ItemIcon = item.icon;
                const isExpanded = expandedItem === item.id;

                return (
                  <div
                    key={item.id}
                    className={`bg-brand-cream rounded-2xl border transition-all duration-500 overflow-hidden ${
                      isExpanded
                        ? "border-brand-green/30 shadow-card row-span-2"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    {/* Card Header */}
                    <button
                      onClick={() =>
                        setExpandedItem(isExpanded ? null : item.id)
                      }
                      className="w-full p-5 flex items-center gap-4 text-left"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <ItemIcon
                          className="w-6 h-6"
                          style={{ color: item.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.questions.length} common questions
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-5 pb-5 animate-slide-up">
                        <div className="space-y-2">
                          {item.questions.map((qa, qIndex) => {
                            const qId = `${item.id}-${qIndex}`;
                            const isQExpanded = expandedQuestion === qId;

                            return (
                              <div
                                key={qId}
                                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                              >
                                <button
                                  onClick={() =>
                                    setExpandedQuestion(
                                      isQExpanded ? null : qId,
                                    )
                                  }
                                  className="w-full px-4 py-3 flex items-center gap-3 text-left"
                                >
                                  <HelpCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                  <span className="text-sm font-medium text-gray-700 flex-1">
                                    {qa.q}
                                  </span>
                                  <ChevronDown
                                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                      isQExpanded ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                                {isQExpanded && (
                                  <div className="px-4 pb-4 pl-11 animate-slide-up">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                      {qa.a}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact Footer */}
            <div className="mt-8 bg-brand-green rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Need more help?
                  </h3>
                  <p className="text-white/70 text-sm">
                    The AI assistant is available 24/7. For urgent matters,
                    contact support directly.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>support@university.edu</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+234 800 123 4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Student Affairs Office</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
