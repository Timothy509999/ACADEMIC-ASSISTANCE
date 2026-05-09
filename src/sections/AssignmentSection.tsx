import { useState } from 'react';
import { ClipboardList, Calendar, Clock, AlertCircle, CheckCircle2, Circle, ArrowRight, FileText, BookOpen, PenTool } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  course: string;
  deadline: string;
  priority: 'high' | 'medium' | 'low';
  type: 'essay' | 'problem-set' | 'project' | 'reading';
}

const initialTasks: Task[] = [
  { id: '1', title: 'Problem Set 3: Linear Algebra', course: 'Math 201', deadline: 'Tomorrow', priority: 'high', type: 'problem-set' },
  { id: '2', title: 'Essay Outline: Colonial History', course: 'History 101', deadline: '3 days', priority: 'medium', type: 'essay' },
  { id: '3', title: 'Lab Report: Photosynthesis', course: 'Biology 301', deadline: '5 days', priority: 'high', type: 'project' },
  { id: '4', title: 'Chapter 5-7 Summary', course: 'Literature 205', deadline: '1 week', priority: 'low', type: 'reading' },
  { id: '5', title: 'Group Project: Market Analysis', course: 'Economics 302', deadline: '2 weeks', priority: 'medium', type: 'project' },
  { id: '6', title: 'Calculus Derivatives Exercise', course: 'Math 201', deadline: 'Today', priority: 'high', type: 'problem-set' },
];

const columns = [
  { id: 'pending', label: 'Pending', icon: Circle, color: 'text-gray-500', bgColor: 'bg-gray-50' },
  { id: 'in-progress', label: 'In Progress', icon: Clock, color: 'text-brand-amber', bgColor: 'bg-brand-amber/5' },
  { id: 'submitted', label: 'Submitted', icon: CheckCircle2, color: 'text-brand-green', bgColor: 'bg-brand-green/5' },
];

const typeIcons = {
  essay: PenTool,
  'problem-set': FileText,
  project: BookOpen,
  reading: BookOpen,
};

const priorityColors = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-brand-amber/10 text-brand-amber',
  low: 'bg-blue-50 text-blue-600',
};

export default function AssignmentSection() {
  const [tasks] = useState<Task[]>(initialTasks);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getColumnTasks = (columnId: string) => {
    if (columnId === 'pending') return tasks.filter((_, i) => i < 3);
    if (columnId === 'in-progress') return tasks.filter((_, i) => i >= 3 && i < 5);
    return tasks.filter((_, i) => i >= 5);
  };

  return (
    <section
      id="assignments"
      className="relative min-h-screen bg-brand-cream"
      style={{ zIndex: 40 }}
    >
      <div className="sticky top-0 h-screen flex flex-col">
        {/* Section Header */}
        <div className="flex-none pt-8 pb-4 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-brand-green" />
              </div>
              <span className="font-mono text-xs text-brand-green uppercase tracking-wider">Feature 03</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Assignment Support</h2>
            <p className="text-gray-600 mt-2 max-w-xl">Track deadlines, get guidance, and manage your academic workload with smart recommendations.</p>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 px-6 md:px-12 pb-6 overflow-hidden">
          <div className="max-w-7xl mx-auto h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              {columns.map((column) => {
                const columnTasks = getColumnTasks(column.id);
                const ColumnIcon = column.icon;

                return (
                  <div
                    key={column.id}
                    className={`${column.bgColor} rounded-2xl p-4 flex flex-col h-full overflow-hidden`}
                  >
                    {/* Column Header */}
                    <div className="flex items-center justify-between mb-4 flex-none">
                      <div className="flex items-center gap-2">
                        <ColumnIcon className={`w-5 h-5 ${column.color}`} />
                        <h3 className="font-semibold text-gray-800">{column.label}</h3>
                      </div>
                      <span className="text-xs font-mono text-gray-500 bg-white px-2 py-1 rounded-lg">
                        {columnTasks.length}
                      </span>
                    </div>

                    {/* Task Cards */}
                    <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3">
                      {columnTasks.map((task, index) => {
                        const TypeIcon = typeIcons[task.type];
                        const isHovered = hoveredCard === task.id;

                        return (
                          <div
                            key={task.id}
                            className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer transition-all duration-300 ${
                              isHovered ? 'shadow-card-hover -translate-y-1' : ''
                            }`}
                            style={{
                              animationDelay: `${index * 0.1}s`,
                              transform: isHovered
                                ? 'translateY(-4px)'
                                : `translateY(${Math.sin(Date.now() / 1000 + index) * 2}px)`,
                            }}
                            onMouseEnter={() => setHoveredCard(task.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-brand-green/10 flex items-center justify-center">
                                  <TypeIcon className="w-3.5 h-3.5 text-brand-green" />
                                </div>
                                <span className="text-xs font-medium text-gray-500">{task.course}</span>
                              </div>
                              <span
                                className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColors[task.priority]}`}
                              >
                                {task.priority}
                              </span>
                            </div>

                            <h4 className="font-semibold text-gray-800 text-sm mb-2 leading-snug">
                              {task.title}
                            </h4>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <Calendar className="w-3 h-3" />
                                <span>{task.deadline}</span>
                              </div>
                              <button className="text-xs text-brand-green font-medium hover:underline flex items-center gap-1">
                                Guide
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>

                            {/* AI Guidance Preview */}
                            {isHovered && (
                              <div className="mt-3 pt-3 border-t border-gray-100 animate-scale-in">
                                <div className="flex items-center gap-1.5 mb-1.5">
                                  <AlertCircle className="w-3 h-3 text-brand-amber" />
                                  <span className="text-xs font-medium text-gray-700">AI Guidance Available</span>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                  Step-by-step breakdown and reference materials ready for this assignment.
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
