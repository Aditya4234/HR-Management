import { 
  HiOutlineUsers, 
  HiOutlineUserGroup, 
  HiOutlineClock, 
  HiOutlineCurrencyDollar,
  HiOutlinePlus,
  HiOutlineDocumentAdd,
  HiOutlineCalendar,
  HiOutlineClipboardCheck
} from 'react-icons/hi';
import StatCard from '../../components/StatCard';
import EmployeeCard from '../../components/EmployeeCard';
import { employees } from '../../data/employees';

const Dashboard = () => {
  const stats = [
    { title: 'Total Employees', value: '1,248', icon: HiOutlineUsers, trend: 'up', trendValue: '12', color: 'from-blue-500 to-indigo-600' },
    { title: 'Active Projects', value: '42', icon: HiOutlineUserGroup, trend: 'up', trendValue: '5', color: 'from-purple-500 to-pink-600' },
    { title: 'Ave. Attendance', value: '94%', icon: HiOutlineClock, trend: 'down', trendValue: '2', color: 'from-orange-500 to-red-600' },
    { title: 'Monthly Payroll', value: '$420K', icon: HiOutlineCurrencyDollar, trend: 'up', trendValue: '8', color: 'from-green-500 to-teal-600' },
  ];

  const quickActions = [
    { name: 'Add Employee', icon: HiOutlinePlus, color: 'from-blue-500 to-indigo-600', href: '/employees' },
    { name: 'Mark Attendance', icon: HiOutlineClipboardCheck, color: 'from-green-500 to-emerald-600', href: '/attendance' },
    { name: 'Generate Report', icon: HiOutlineDocumentAdd, color: 'from-purple-500 to-pink-600', href: '/reports' },
    { name: 'Schedule Meeting', icon: HiOutlineCalendar, color: 'from-orange-500 to-red-600', href: '/announcements' },
  ];

  const recentActivities = [
    { action: 'New employee onboarded', employee: 'Sneha Kapoor', time: '2 hours ago', type: 'success' },
    { action: 'Leave request approved', employee: 'Priya Singh', time: '4 hours ago', type: 'info' },
    { action: 'Payroll processed', employee: 'All Employees', time: '1 day ago', type: 'success' },
    { action: 'Performance review pending', employee: 'Rahul Verma', time: '2 days ago', type: 'warning' },
    { action: 'New job posting created', employee: 'HR Team', time: '3 days ago', type: 'info' },
  ];

  const getActivityColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-500/10 border-green-500/30 text-green-400';
      case 'warning': return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400';
      case 'info': return 'bg-blue-500/10 border-blue-500/30 text-blue-400';
      default: return 'bg-gray-500/10 border-gray-500/30 text-gray-400';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-black text-white">Dashboard</h2>
        <p className="text-gray-400">Welcome back, Aditya. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="glass rounded-3xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.name}
              className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group border border-white/5 hover:border-indigo-500/30 flex flex-col items-center space-y-3"
            >
              <div className={`p-4 rounded-xl bg-gradient-to-br ${action.color} shadow-lg group-hover:scale-110 transition-transform`}>
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{action.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass rounded-3xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Recent Activities</h3>
              <button className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">View All</button>
            </div>
            <div className="space-y-3">
              {recentActivities.map((activity, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${getActivityColor(activity.type)} transition-colors`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">{activity.action}</p>
                      <p className="text-xs opacity-70">{activity.employee}</p>
                    </div>
                    <span className="text-xs opacity-60">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Workforce Analytics</h3>
            <button className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">View Details</button>
          </div>
          <div className="glass rounded-3xl p-8 h-80 flex items-center justify-center border border-white/10">
            <p className="text-gray-500 italic">Interactive charts and analytics will be rendered here...</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">New Joiners</h3>
            <button className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">See Directory</button>
          </div>
          <div className="space-y-4">
            {employees.slice(0, 3).map((emp) => (
              <EmployeeCard key={emp.id} employee={emp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
