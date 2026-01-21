"use client";
import { HiOutlineSpeakerphone, HiOutlineClock, HiOutlineCheckCircle } from 'react-icons/hi';

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: 'Company Wide Meeting - Q1 2026 Review',
      content: 'Join us for the quarterly review meeting on January 25th at 10:00 AM in the main conference hall. We will discuss Q4 achievements and Q1 objectives.',
      author: 'Sarah Jenkins',
      role: 'CEO',
      date: '2 hours ago',
      priority: 'high',
      category: 'Meeting',
      readBy: 142,
      totalEmployees: 1248,
    },
    {
      id: 2,
      title: 'New Health Insurance Policy Updated',
      content: 'We are excited to announce enhanced health insurance coverage starting February 1st. All employees and their families will receive improved benefits including dental and vision care.',
      author: 'Priya Singh',
      role: 'HR Manager',
      date: '1 day ago',
      priority: 'medium',
      category: 'Benefits',
      readBy: 856,
      totalEmployees: 1248,
    },
    {
      id: 3,
      title: 'Office Closure - Republic Day',
      content: 'The office will remain closed on January 26th for Republic Day. Regular operations will resume on January 27th.',
      author: 'Admin Team',
      role: 'Administration',
      date: '3 days ago',
      priority: 'low',
      category: 'Holiday',
      readBy: 1205,
      totalEmployees: 1248,
    },
    {
      id: 4,
      title: 'Employee of the Month - December 2025',
      content: 'Congratulations to Aditya Sharma for being selected as Employee of the Month! His exceptional work on the new product launch has been outstanding.',
      author: 'Michael Chen',
      role: 'VP Engineering',
      date: '1 week ago',
      priority: 'medium',
      category: 'Recognition',
      readBy: 1180,
      totalEmployees: 1248,
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'medium': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'low': return 'bg-green-500/10 text-green-400 border-green-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white">Company Announcements</h2>
          <p className="text-gray-400">Stay updated with the latest company news and updates.</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <HiOutlineSpeakerphone className="h-5 w-5" />
          <span>Post Announcement</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {announcements.map((announcement) => {
            const readPercentage = Math.round((announcement.readBy / announcement.totalEmployees) * 100);
            
            return (
              <div key={announcement.id} className="glass p-6 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getPriorityColor(announcement.priority)}`}>
                        {announcement.priority.toUpperCase()}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-600/20 text-indigo-400 border border-indigo-500/20">
                        {announcement.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{announcement.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{announcement.content}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      {announcement.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{announcement.author}</p>
                      <p className="text-xs text-gray-500">{announcement.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <HiOutlineCheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-xs font-semibold text-green-400">{readPercentage}% read</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <HiOutlineClock className="h-3 w-3" />
                      <span className="text-xs">{announcement.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-3xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-xs text-gray-500 mb-1">Total Announcements</p>
                <p className="text-2xl font-black text-white">247</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-xs text-gray-500 mb-1">This Month</p>
                <p className="text-2xl font-black text-indigo-400">18</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-xs text-gray-500 mb-1">Avg. Read Rate</p>
                <p className="text-2xl font-black text-green-400">94%</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-3xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
            <div className="space-y-2">
              {['Meeting', 'Benefits', 'Holiday', 'Recognition', 'Policy', 'Event'].map((cat, idx) => (
                <button key={idx} className="w-full text-left px-3 py-2 rounded-lg bg-white/5 hover:bg-indigo-600/20 transition-colors text-sm text-gray-300 hover:text-white">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
