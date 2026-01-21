"use client";
import { HiOutlineCheckCircle, HiOutlineXCircle, HiOutlineClock } from 'react-icons/hi';
import StatCard from '../../components/StatCard';
import Table from '../../components/Table';

export default function AttendancePage() {
  const stats = [
    { title: 'Present Today', value: '1,186', icon: HiOutlineCheckCircle, color: 'from-green-500 to-emerald-600' },
    { title: 'Absent Today', value: '24', icon: HiOutlineXCircle, color: 'from-red-500 to-rose-600' },
    { title: 'Late Arrivals', value: '38', icon: HiOutlineClock, color: 'from-yellow-500 to-orange-600' },
  ];

  const attendanceData = [
    { id: 1, name: 'Aditya Sharma', department: 'Engineering', checkIn: '09:00 AM', checkOut: '06:15 PM', status: 'Present' },
    { id: 2, name: 'Priya Singh', department: 'HR', checkIn: '09:15 AM', checkOut: '-', status: 'On Leave' },
    { id: 3, name: 'Rahul Verma', department: 'Design', checkIn: '09:45 AM', checkOut: '06:00 PM', status: 'Late' },
    { id: 4, name: 'Sneha Kapoor', department: 'Marketing', checkIn: '08:55 AM', checkOut: '06:30 PM', status: 'Present' },
    { id: 5, name: 'Vikram Malhotra', department: 'Engineering', checkIn: '-', checkOut: '-', status: 'Absent' },
  ];

  const columns = [
    { label: 'Employee', key: 'name' },
    { label: 'Department', key: 'department' },
    { label: 'Check-in', key: 'checkIn' },
    { label: 'Check-out', key: 'checkOut' },
    { label: 'Status', key: 'status' },
  ];

  const renderRow = (record, idx) => (
    <tr key={record.id} className="hover:bg-white/5 transition-colors">
      <td className="px-6 py-4 text-sm font-semibold text-white">{record.name}</td>
      <td className="px-6 py-4 text-sm text-gray-400">{record.department}</td>
      <td className="px-6 py-4 text-sm text-gray-300">{record.checkIn}</td>
      <td className="px-6 py-4 text-sm text-gray-300">{record.checkOut}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
          record.status === 'Present' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
          record.status === 'Late' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
          record.status === 'On Leave' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
          'bg-red-500/10 text-red-400 border-red-500/20'
        }`}>
          {record.status}
        </span>
      </td>
    </tr>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-black text-white">Attendance Tracking</h2>
        <p className="text-gray-400">Monitor real-time employee attendance and punctuality.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Today's Attendance - January 20, 2026</h3>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors">
            Export Report
          </button>
          <button className="btn-primary">Mark Attendance</button>
        </div>
      </div>

      <Table columns={columns} data={attendanceData} renderRow={renderRow} />
    </div>
  );
}
