"use client";
import { useParams } from 'next/navigation';
import { employees } from '../../../data/employees';
import { HiOutlineMail, HiOutlinePhone, HiOutlineOfficeBuilding, HiOutlineArrowLeft } from 'react-icons/hi';
import Link from 'next/link';

const EmployeeDetail = () => {
  const { id } = useParams();
  const employee = employees.find(e => e.id === id);

  if (!employee) return <div className="text-center p-20 text-gray-500">Employee not found.</div>;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
      <Link href="/employees" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group">
        <HiOutlineArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-semibold text-sm">Back to Directory</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="glass p-8 rounded-3xl border border-white/10 text-center">
            <div className="relative inline-block">
              <img src={employee.avatar} alt="" className="h-32 w-32 rounded-3xl border-2 border-indigo-500/30 p-1" />
              <span className="absolute bottom-2 right-2 h-6 w-6 bg-green-500 border-4 border-black rounded-full"></span>
            </div>
            <h2 className="text-2xl font-black text-white mt-6">{employee.name}</h2>
            <p className="text-indigo-400 font-semibold">{employee.role}</p>
            <div className="mt-8 flex justify-center space-x-4">
               <button className="p-3 bg-white/5 rounded-2xl hover:bg-indigo-600 transition-colors border border-white/10">
                 <HiOutlineMail className="h-6 w-6" />
               </button>
               <button className="p-3 bg-white/5 rounded-2xl hover:bg-indigo-600 transition-colors border border-white/10">
                 <HiOutlinePhone className="h-6 w-6" />
               </button>
            </div>
          </div>

          <div className="glass p-6 rounded-3xl border border-white/10 space-y-4">
            <h3 className="font-bold text-white px-2">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 text-center">
                <p className="text-xs text-gray-500 font-bold">ATTENDANCE</p>
                <p className="text-lg font-black text-green-400">98%</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 text-center">
                <p className="text-xs text-gray-500 font-bold">LEAVES</p>
                <p className="text-lg font-black text-purple-400">2/12</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="glass p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Employment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Department</p>
                  <div className="flex items-center space-x-3 text-gray-200">
                    <HiOutlineOfficeBuilding className="h-5 w-5 text-indigo-400" />
                    <span className="font-medium">{employee.department}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Employee ID</p>
                  <p className="text-gray-200 font-medium">{employee.id}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Date Joined</p>
                  <p className="text-gray-200 font-medium">{employee.joiningDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Reporting To</p>
                  <div className="flex items-center space-x-2">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Manager" alt="" className="h-6 w-6 rounded-full" />
                    <span className="text-gray-200 font-medium text-sm">Sarah Jenkins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Performance Timeline</h3>
            <div className="h-40 flex items-center justify-center border-2 border-dashed border-white/5 rounded-2xl">
              <p className="text-gray-600 italic">Timeline data will be loaded here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
