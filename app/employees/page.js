"use client";
import { HiOutlinePlus, HiOutlineFilter, HiOutlineSearch } from 'react-icons/hi';
import Table from '../../components/Table';
import { employees } from '../../data/employees';
import Link from 'next/link';

const EmployeesPage = () => {
  const columns = [
    { label: 'Employee', key: 'name' },
    { label: 'Department', key: 'department' },
    { label: 'Status', key: 'status' },
    { label: 'Joining Date', key: 'joiningDate' },
    { label: 'Actions', key: 'actions' },
  ];

  const renderRow = (emp, idx) => (
    <tr key={emp.id} className="hover:bg-white/5 transition-colors group">
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <img src={emp.avatar} alt="" className="h-10 w-10 rounded-xl" />
          <div>
            <p className="text-sm font-bold text-white">{emp.name}</p>
            <p className="text-xs text-gray-500">{emp.email}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-400">{emp.department}</td>
      <td className="px-6 py-4">
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
          emp.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
          emp.status === 'On Leave' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' : 
          'bg-red-500/10 text-red-400 border-red-500/20'
        }`}>
          {emp.status}
        </span>
      </td>
      <td className="px-6 py-4 text-sm text-gray-400">{emp.joiningDate}</td>
      <td className="px-6 py-4 text-right">
        <Link 
          href={`/employees/${emp.id}`}
          className="text-xs font-bold text-indigo-400 hover:text-white transition-colors"
        >
          View Details
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white">Employees</h2>
          <p className="text-gray-400">Manage all staff members and their details.</p>
        </div>
        <button className="btn-primary flex items-center space-x-2 self-start">
          <HiOutlinePlus className="h-5 w-5" />
          <span>Add Employee</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <HiOutlineSearch className="absolute left-4 top-3.5 text-gray-500 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by name, role, department..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all text-white"
          />
        </div>
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-2 text-sm font-semibold text-gray-300 hover:bg-white/10 transition-colors">
          <HiOutlineFilter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      <Table columns={columns} data={employees} renderRow={renderRow} />
    </div>
  );
};

export default EmployeesPage;
