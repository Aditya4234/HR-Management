"use client";
import { HiOutlineChartBar, HiOutlineDownload, HiOutlineCalendar } from 'react-icons/hi';
import StatCard from '../../components/StatCard';

export default function ReportsPage() {
  const stats = [
    { title: 'Reports Generated', value: '247', icon: HiOutlineChartBar, trend: 'up', trendValue: '18', color: 'from-blue-500 to-indigo-600' },
    { title: 'This Month', value: '42', icon: HiOutlineCalendar, color: 'from-purple-500 to-pink-600' },
    { title: 'Total Downloads', value: '1.2K', icon: HiOutlineDownload, color: 'from-green-500 to-emerald-600' },
  ];

  const reportCategories = [
    {
      category: 'Employee Reports',
      reports: [
        { name: 'Employee Master List', description: 'Complete employee database with all details', lastGenerated: '2 hours ago' },
        { name: 'Department-wise Distribution', description: 'Employee count by department', lastGenerated: '1 day ago' },
        { name: 'New Joiners Report', description: 'List of employees joined in last 30 days', lastGenerated: '3 days ago' },
      ],
    },
    {
      category: 'Attendance & Leave',
      reports: [
        { name: 'Monthly Attendance Summary', description: 'Attendance percentage by employee', lastGenerated: '5 hours ago' },
        { name: 'Leave Balance Report', description: 'Remaining leave days for all employees', lastGenerated: '1 day ago' },
        { name: 'Late Arrivals Report', description: 'Employees with punctuality issues', lastGenerated: '2 days ago' },
      ],
    },
    {
      category: 'Payroll & Compensation',
      reports: [
        { name: 'Monthly Payroll Summary', description: 'Total salary disbursement breakdown', lastGenerated: '6 hours ago' },
        { name: 'Salary Structure Report', description: 'Component-wise salary details', lastGenerated: '4 days ago' },
        { name: 'Tax Deduction Report', description: 'TDS and other deductions summary', lastGenerated: '1 week ago' },
      ],
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-black text-white">Reports & Analytics</h2>
        <p className="text-gray-400">Generate and download comprehensive HR reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="space-y-6">
        {reportCategories.map((cat, idx) => (
          <div key={idx} className="glass p-6 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></div>
              {cat.category}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {cat.reports.map((report, ridx) => (
                <div key={ridx} className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group border border-white/5 hover:border-indigo-500/30">
                  <h4 className="font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{report.name}</h4>
                  <p className="text-xs text-gray-500 mb-3">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Updated {report.lastGenerated}</span>
                    <button className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 transition-colors text-indigo-400 hover:text-white">
                      <HiOutlineDownload className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass p-6 rounded-3xl border border-white/10">
        <h3 className="text-lg font-bold text-white mb-4">Custom Report Builder</h3>
        <p className="text-sm text-gray-400 mb-4">Create custom reports with your preferred metrics and filters.</p>
        <button className="btn-primary">Launch Report Builder</button>
      </div>
    </div>
  );
}
