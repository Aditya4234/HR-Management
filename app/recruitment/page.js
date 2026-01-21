"use client";
import { HiOutlineBriefcase, HiOutlineUsers, HiOutlineDocumentText } from 'react-icons/hi';
import StatCard from '../../components/StatCard';
import Table from '../../components/Table';

export default function RecruitmentPage() {
  const stats = [
    { title: 'Active Openings', value: '18', icon: HiOutlineBriefcase, color: 'from-blue-500 to-indigo-600' },
    { title: 'Total Applicants', value: '142', icon: HiOutlineUsers, trend: 'up', trendValue: '15', color: 'from-purple-500 to-pink-600' },
    { title: 'Interviews Scheduled', value: '27', icon: HiOutlineDocumentText, color: 'from-green-500 to-emerald-600' },
  ];

  const jobPostings = [
    { id: 1, title: 'Senior Frontend Developer', department: 'Engineering', type: 'Full-time', applicants: 45, posted: '2026-01-10', status: 'Active' },
    { id: 2, title: 'UX Designer', department: 'Design', type: 'Full-time', applicants: 32, posted: '2026-01-12', status: 'Active' },
    { id: 3, title: 'Marketing Manager', department: 'Marketing', type: 'Full-time', applicants: 28, posted: '2026-01-14', status: 'Active' },
    { id: 4, title: 'DevOps Engineer', department: 'Engineering', type: 'Contract', applicants: 18, posted: '2026-01-15', status: 'Active' },
    { id: 5, title: 'HR Coordinator', department: 'HR', type: 'Part-time', applicants: 19, posted: '2026-01-08', status: 'Closed' },
  ];

  const columns = [
    { label: 'Job Title', key: 'title' },
    { label: 'Department', key: 'department' },
    { label: 'Type', key: 'type' },
    { label: 'Applicants', key: 'applicants' },
    { label: 'Posted', key: 'posted' },
    { label: 'Status', key: 'status' },
    { label: 'Actions', key: 'actions' },
  ];

  const renderRow = (job, idx) => (
    <tr key={job.id} className="hover:bg-white/5 transition-colors">
      <td className="px-6 py-4 text-sm font-semibold text-white">{job.title}</td>
      <td className="px-6 py-4 text-sm text-gray-400">{job.department}</td>
      <td className="px-6 py-4 text-sm text-gray-300">{job.type}</td>
      <td className="px-6 py-4 text-sm text-indigo-400 font-bold">{job.applicants}</td>
      <td className="px-6 py-4 text-sm text-gray-300">{job.posted}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
          job.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
          'bg-gray-500/10 text-gray-400 border-gray-500/20'
        }`}>
          {job.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <button className="text-xs text-indigo-400 hover:text-indigo-300 font-bold">
          View Applicants
        </button>
      </td>
    </tr>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-black text-white">Recruitment</h2>
        <p className="text-gray-400">Manage job postings and track applicants.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Open Positions</h3>
        <button className="btn-primary">Post New Job</button>
      </div>

      <Table columns={columns} data={jobPostings} renderRow={renderRow} />
    </div>
  );
}
