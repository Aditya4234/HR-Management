"use client";
import { HiOutlineUser, HiOutlineBell, HiOutlineLockClosed, HiOutlineColorSwatch } from 'react-icons/hi';

export default function SettingsPage() {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: HiOutlineUser,
      items: [
        { label: 'Full Name', value: 'Aditya Sharma', type: 'input' },
        { label: 'Email Address', value: 'admin@talenttrack.com', type: 'input' },
        { label: 'Role', value: 'System Administrator', type: 'select' },
      ],
    },
    {
      title: 'Notifications',
      icon: HiOutlineBell,
      items: [
        { label: 'Email Notifications', value: true, type: 'toggle' },
        { label: 'Push Notifications', value: false, type: 'toggle' },
        { label: 'Leave Request Alerts', value: true, type: 'toggle' },
      ],
    },
    {
      title: 'Security',
      icon: HiOutlineLockClosed,
      items: [
        { label: 'Two-Factor Authentication', value: false, type: 'toggle' },
        { label: 'Session Timeout (minutes)', value: '30', type: 'input' },
        { label: 'Password Last Changed', value: 'Dec 15, 2025', type: 'text' },
      ],
    },
    {
      title: 'Appearance',
      icon: HiOutlineColorSwatch,
      items: [
        { label: 'Theme', value: 'Dark', type: 'select' },
        { label: 'Language', value: 'English', type: 'select' },
        { label: 'Compact Mode', value: false, type: 'toggle' },
      ],
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-black text-white">Settings</h2>
        <p className="text-gray-400">Configure your account and application preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settingsSections.map((section, idx) => (
          <div key={idx} className="glass p-6 rounded-3xl border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400">
                <section.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{section.title}</h3>
            </div>

            <div className="space-y-4">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-sm text-gray-300">{item.label}</span>
                  {item.type === 'toggle' ? (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={item.value} />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  ) : item.type === 'input' ? (
                    <input
                      type="text"
                      defaultValue={item.value}
                      className="bg-black/40 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  ) : item.type === 'select' ? (
                    <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50">
                      <option>{item.value}</option>
                    </select>
                  ) : (
                    <span className="text-sm text-gray-500">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors">
          Reset to Defaults
        </button>
        <button className="btn-primary px-6 py-2.5">Save Changes</button>
      </div>
    </div>
  );
}
