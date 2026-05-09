import { useState } from "react";
import {
  CreditCard,
  Wallet,
  Building2,
  BookOpen,
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";

interface PaymentItem {
  id: string;
  label: string;
  amount: number;
  color: string;
  icon: React.ElementType;
  description: string;
}

const paymentData: PaymentItem[] = [
  {
    id: "tuition",
    label: "Tuition Fees",
    amount: 450000,
    color: "#3D5A40",
    icon: BookOpen,
    description: "Semester tuition & course materials",
  },
  {
    id: "hostel",
    label: "Hostel Fees",
    amount: 120000,
    color: "#E8A043",
    icon: Building2,
    description: "Accommodation & utilities",
  },
  {
    id: "library",
    label: "Library",
    amount: 25000,
    color: "#5B8C5E",
    icon: BookOpen,
    description: "Access & digital resources",
  },
  {
    id: "union",
    label: "Student Union",
    amount: 15000,
    color: "#D4933A",
    icon: Users,
    description: "Activities & representation",
  },
];

const totalAmount = paymentData.reduce((sum, item) => sum + item.amount, 0);

const recentPayments = [
  {
    name: "Amara O.",
    item: "Tuition Fees",
    time: "2 mins ago",
    amount: "₦450,000",
  },
  {
    name: "Kwame B.",
    item: "Hostel Fees",
    time: "5 mins ago",
    amount: "₦120,000",
  },
  {
    name: "Zainab K.",
    item: "Library",
    time: "12 mins ago",
    amount: "₦25,000",
  },
  {
    name: "Tunde A.",
    item: "Student Union",
    time: "18 mins ago",
    amount: "₦15,000",
  },
];

export default function PaymentSection() {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  // const getSegmentPath = (index: number, _total: number, hovered: boolean) => {
  //   const startAngle = paymentData
  //     .slice(0, index)
  //     .reduce((sum, item) => sum + (item.amount / totalAmount) * 360, 0);
  //   const sweepAngle = (paymentData[index].amount / totalAmount) * 360;
  //   const radius = hovered ? 110 : 100;
  //   const innerRadius = 60;

  //   const startRad = ((startAngle - 90) * Math.PI) / 180;
  //   const endRad = ((startAngle + sweepAngle - 90) * Math.PI) / 180;

  //   const x1 = 150 + innerRadius * Math.cos(startRad);
  //   const y1 = 150 + innerRadius * Math.sin(startRad);
  //   const x2 = 150 + radius * Math.cos(startRad);
  //   const y2 = 150 + radius * Math.sin(startRad);
  //   const x3 = 150 + radius * Math.cos(endRad);
  //   const y3 = 150 + radius * Math.sin(endRad);
  //   const x4 = 150 + innerRadius * Math.cos(endRad);
  //   const y4 = 150 + innerRadius * Math.sin(endRad);

  //   const largeArc = sweepAngle > 180 ? 1 : 0;

  //   return `M ${x1} ${y1} L ${x2} ${y2} A ${radius} ${radius} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1} Z`;
  // };

  return (
    <section
      id="payments"
      className="relative min-h-screen bg-white"
      style={{ zIndex: 30 }}
    >
      <div className="sticky top-0 h-screen flex flex-col">
        {/* Section Header */}
        <div className="flex-none pt-8 pb-4 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-brand-amber/10 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-brand-amber" />
              </div>
              <span className="font-mono text-xs text-brand-amber uppercase tracking-wider">
                Feature 02
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Tuition & Payments
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Smart payment tracking and breakdown. See where your money goes
              and pay seamlessly.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 md:px-12 pb-6 overflow-hidden">
          <div className="max-w-7xl mx-auto h-full flex gap-8">
            {/* Left: Payment Chart */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-brand-cream rounded-2xl p-6 shadow-card flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-800">
                    Payment Breakdown
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Wallet className="w-4 h-4" />
                    <span className="font-mono">
                      Total: ₦{totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* <div className="flex-1 flex items-center justify-center">
                  <div className="relative">
                    <svg width="300" height="300" viewBox="0 0 300 300">
                      {paymentData.map((item, index) => (
                        <path
                          key={item.id}
                          d={getSegmentPath(
                            index,
                            paymentData.length,
                            hoveredSegment === item.id,
                          )}
                          fill={item.color}
                          opacity={
                            hoveredSegment && hoveredSegment !== item.id
                              ? 0.5
                              : 0.9
                          }
                          stroke="white"
                          strokeWidth="3"
                          className="cursor-pointer transition-all duration-300"
                          onMouseEnter={() => setHoveredSegment(item.id)}
                          onMouseLeave={() => setHoveredSegment(null)}
                          onClick={() =>
                            setActiveSegment(
                              activeSegment === item.id ? null : item.id,
                            )
                          }
                        />
                      ))}
                      <text
                        x="150"
                        y="145"
                        textAnchor="middle"
                        className="text-2xl font-bold fill-gray-800"
                      >
                        ₦{totalAmount.toLocaleString()}
                      </text>
                      <text
                        x="150"
                        y="165"
                        textAnchor="middle"
                        className="text-xs fill-gray-500"
                      >
                        Total Semester
                      </text>
                    </svg>
                  </div>
                </div> */}

                {/* Legend */}
                <div className="flex-1 gap-3 mt-1">
                  {paymentData.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                        hoveredSegment === item.id || activeSegment === item.id
                          ? "bg-white shadow-sm"
                          : "hover:bg-white/50"
                      }`}
                      onMouseEnter={() => setHoveredSegment(item.id)}
                      onMouseLeave={() => setHoveredSegment(null)}
                      onClick={() =>
                        setActiveSegment(
                          activeSegment === item.id ? null : item.id,
                        )
                      }
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-800 truncate">
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          ₦{item.amount.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-xs font-mono text-gray-400">
                        {Math.round((item.amount / totalAmount) * 100)}%
                      </div>
                    </div>
                  ))}
                </div>

                {activeSegment && (
                  <div className="mt-4 bg-white rounded-xl p-4 border border-gray-100 animate-scale-in">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-800">
                          {
                            paymentData.find((p) => p.id === activeSegment)
                              ?.label
                          }
                        </div>
                        <div className="text-sm text-gray-500">
                          {
                            paymentData.find((p) => p.id === activeSegment)
                              ?.description
                          }
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-brand-green text-white text-sm font-medium hover:bg-brand-green/90 active:scale-95 transition-all flex items-center gap-2">
                        Pay Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Recent Activity & Summary */}
            <div className="hidden lg:flex flex-col w-1/3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-card flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">
                    Recent Payments
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </div>
                </div>

                <div className="space-y-3 relative overflow-hidden">
                  {recentPayments.map((payment, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-brand-green/5 transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-brand-green" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-800 truncate">
                          {payment.name}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {payment.time}
                        </div>
                      </div>
                      <div className="text-sm font-mono font-medium text-brand-green">
                        {payment.amount}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-brand-amber/5 rounded-xl border border-brand-amber/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-brand-amber/20 flex items-center justify-center">
                      <Wallet className="w-3 h-3 text-brand-amber" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      Payment Methods
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {["Bank Transfer", "Card", "Mobile Money"].map((method) => (
                      <span
                        key={method}
                        className="px-3 py-1 rounded-lg bg-white text-xs text-gray-600 border border-gray-200"
                      >
                        {method}
                      </span>
                    ))}
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
