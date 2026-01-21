"use client";
import { HiOutlineCurrencyDollar, HiOutlineCheckCircle, HiOutlineTrendingUp } from 'react-icons/hi';
import StatCard from '../../components/StatCard';
import Table from '../../components/Table';

export default function PayrollPage() {
  const stats = [
    { title: 'Total Payroll', value: '$420K', icon: HiOutlineCurrencyDollar, trend: 'up', trendValue: '8', color: 'from-green-500 to-emerald-600' },
    { title: 'Processed', value: '1,186', icon: HiOutlineCheckCircle, color: 'from-blue-500 to-indigo-600' },
    { title: 'Average Salary', value: '$3,560', icon: HiOutlineTrendingUp, trend: 'up', trendValue: '5', color: 'from-purple-500 to-pink-600' },
  ];

  const payrollData = [
    { id: 1, employee: 'Aditya Sharma', role: 'Senior Engineer', baseSalary: '$4,500', bonus: '$500', deductions: '$200', netPay: '$4,800', status: 'Paid' },
    { id: 2, employee: 'Priya Singh', role: 'HR Manager', baseSalary: '$3,800', bonus: '$300', deductions: '$150', netPay: '$3,950', status: 'Paid' },
    { id: 3, employee: 'Rahul Verma', role: 'Product Designer', baseSalary: '$3,200', bonus: '$200', deductions: '$120', netPay: '$3,280', status: 'Pending' },
    { id: 4, employee: 'Sneha Kapoor', role: 'Marketing Specialist', baseSalary: '$2,900', bonus: '$150', deductions: '$100', netPay: '$2,950', status: 'Paid' },
    { id: 5, employee: 'Vikram Malhotra', role: 'QA Lead', baseSalary: '$3,500', bonus: '$250', deductions: '$130', netPay: '$3,620', status: 'Pending' },
  ];

  const columns = [
    { label: 'Employee', key: 'employee' },
    { label: 'Role', key: 'role' },
    { label: 'Base Salary', key: 'baseSalary' },
    { label: 'Bonus', key: 'bonus' },
    { label: 'Deductions', key: 'deductions' },
    { label: 'Net Pay', key: 'netPay' },
    { label: 'Status', key: 'status' },
  ];

  const renderRow = (record, idx) => (
    <tr key={record.id} className="hover:bg-white/5 transition-colors">
      <td className="px-6 py-4 text-sm font-semibold text-white">{record.employee}</td>
      <td className="px-6 py-4 text-sm text-gray-400">{record.role}</td>
      <td className="px-6 py-4 text-sm text-gray-300">{record.baseSalary}</td>
      <td className="px-6 py-4 text-sm text-green-400">{record.bonus}</td>
      <td className="px-6 py-4 text-sm text-red-400">{record.deductions}</td>
      <td className="px-6 py-4 text-sm font-bold text-white">{record.netPay}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
          record.status === 'Paid' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
          'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
        }`}>
          {record.status}
        </span>
      </td>
    </tr>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-black text-white">Payroll Management</h2>
        <p className="text-gray-400">Process and manage employee salary disbursements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">January 2026 Payroll</h3>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors">
            Export Report
          </button>
          <button className="btn-primary">Process Payroll</button>
        </div>
      </div>

      <Table columns={columns} data={payrollData} renderRow={renderRow} />
    </div>
  );
}
