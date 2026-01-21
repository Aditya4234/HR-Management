"use client";
import { HiOutlineCalendar, HiOutlineCheckCircle, HiOutlineClock } from 'react-icons/hi';
import StatCard from '../../components/StatCard';
import Table from '../../components/Table';

export default function LeavePage() {
  const stats = [
    { title: 'Pending Requests', value: '12', icon: HiOutlineClock, color: 'from-yellow-500 to-orange-600' },
    { title: 'Approved This Month', value: '48', icon: HiOutlineCheckCircle, color: 'from-green-500 to-emerald-600' },
    { title: 'Annual Leave Days', value: '420', icon: HiOutlineCalendar, color: 'from-blue-500 to-indigo-600' },
  ];

  const leaveRequests = [
    { id: 1, employee: 'Aditya Sharma', type: 'Sick Leave', startDate: '2026-01-22', endDate: '2026-01-23', days: 2, status: 'Pending' },
    { id: 2, employee: 'Priya Singh', type: 'Casual Leave', startDate: '2026-01-20', endDate: '2026-01-22', days: 3, status: 'Approved' },
    { id: 3, employee: 'Rahul Verma', type: 'Annual Leave', startDate: '2026-02-01', endDate: '2026-02-07', days: 7, status: 'Pending' },
    { id: 4, employee: 'Sneha Kapoor', type: 'Work From Home', startDate: '2026-01-21', endDate: '2026-01-21', days: 1, status: 'Approved' },
    { id: 5, employee: 'Vikram Malhotra', type: 'Sick Leave', startDate: '2026-01-18', endDate: '2026-01-19', days: 2, status: 'Rejected' },
  ];

  const columns = [
    { label: 'Employee', key: 'employee' },
    { label: 'Leave Type', key: 'type' },
    { label: 'Start Date', key: 'startDate' },
    { label: 'End Date', key: 'endDate' },
    { label: 'Days', key: 'days' },
    { label: 'Status', key: 'status' },
    { label: 'Actions', key: 'actions' },
  ];

  const renderRow = (request, idx) => (
    <tr key={request.id} className="hover:bg-white/5 transition-colors">
      <td className="px-6 py-4 text-sm font-semibold text-white">{request.employee}</td>
      <td className="px-6 py-4 text-sm text-gray-400">{request.type}</td>
      <td className="px-6 py-4 text-sm text-gray-300">{request.startDate}</td>
      <td className="px-6 py-4 text-sm text-gray-300">{request.endDate}</td>
      <td className="px-6 py-4 text-sm text-gray-300">{request.days}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
          request.status === 'Approved' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
          request.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
          'bg-red-500/10 text-red-400 border-red-500/20'
        }`}>
          {request.status}
        </span>
      </td>
      <td className="px-6 py-4">
        {request.status === 'Pending' && (
          <div className="flex space-x-2">
            <button className="text-xs text-green-400 hover:text-green-300 font-bold">Approve</button>
            <span className="text-gray-600">|</span>
            <button className="text-xs text-red-400 hover:text-red-300 font-bold">Reject</button>
          </div>
        )}
      </td>
    </tr>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-black text-white">Leave Management</h2>
        <p className="text-gray-400">Review and approve employee leave requests.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Recent Leave Requests</h3>
        <button className="btn-primary">Apply for Leave</button>
      </div>

      <Table columns={columns} data={leaveRequests} renderRow={renderRow} />
    </div>
  );
}
