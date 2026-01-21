"use client";
import { HiOutlineStar, HiOutlineTrendingUp, HiOutlineUserGroup } from 'react-icons/hi';
import StatCard from '../../components/StatCard';

export default function PerformancePage() {
  const stats = [
    { title: 'Reviews Pending', value: '18', icon: HiOutlineStar, color: 'from-yellow-500 to-orange-600' },
    { title: 'Avg. Rating', value: '4.2/5', icon: HiOutlineTrendingUp, trend: 'up', trendValue: '8', color: 'from-green-500 to-emerald-600' },
    { title: 'Reviewed This Month', value: '124', icon: HiOutlineUserGroup, color: 'from-blue-500 to-indigo-600' },
  ];

  const reviews = [
    { employee: 'Aditya Sharma', role: 'Senior Engineer', reviewer: 'Sarah Jenkins', period: 'Q4 2025', rating: 4.5, status: 'Completed' },
    { employee: 'Priya Singh', role: 'HR Manager', reviewer: 'Michael Chen', period: 'Q4 2025', rating: 4.8, status: 'Completed' },
    { employee: 'Rahul Verma', role: 'Product Designer', reviewer: 'Sarah Jenkins', period: 'Q4 2025', rating: null, status: 'Pending' },
    { employee: 'Sneha Kapoor', role: 'Marketing Specialist', reviewer: 'Lisa Anderson', period: 'Q4 2025', rating: 4.3, status: 'Completed' },
    { employee: 'Vikram Malhotra', role: 'QA Lead', reviewer: 'Michael Chen', period: 'Q4 2025', rating: null, status: 'In Progress' },
  ];

  const goals = [
    { title: 'Complete React Certification', owner: 'Aditya Sharma', progress: 75, dueDate: 'Feb 15, 2026' },
    { title: 'Improve Team Productivity by 20%', owner: 'Priya Singh', progress: 60, dueDate: 'Mar 31, 2026' },
    { title: 'Launch New Design System', owner: 'Rahul Verma', progress: 40, dueDate: 'Apr 10, 2026' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-black text-white">Performance Management</h2>
        <p className="text-gray-400">Track employee performance reviews and goal progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reviews Section */}
        <div className="glass p-6 rounded-3xl border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Performance Reviews</h3>
            <button className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">View All</button>
          </div>
          <div className="space-y-3">
            {reviews.map((review, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-white text-sm">{review.employee}</h4>
                    <p className="text-xs text-gray-500">{review.role} • Reviewer: {review.reviewer}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                    review.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                    review.status === 'In Progress' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                    'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                  }`}>
                    {review.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-600">{review.period}</span>
                  {review.rating && (
                    <div className="flex items-center space-x-1">
                      <HiOutlineStar className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-bold text-yellow-500">{review.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <div className="glass p-6 rounded-3xl border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Active Goals</h3>
            <button className="btn-primary text-sm px-4 py-2">Add Goal</button>
          </div>
          <div className="space-y-4">
            {goals.map((goal, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="font-semibold text-white text-sm mb-2">{goal.title}</h4>
                <p className="text-xs text-gray-500 mb-3">Owner: {goal.owner}</p>
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Progress</span>
                    <span className="text-xs font-bold text-indigo-400">{goal.progress}%</span>
                  </div>
                  <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-600">Due: {goal.dueDate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
