"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    HiOutlineHome,
    HiOutlineUsers,
    HiOutlineCalendar,
    HiOutlineCollection,
    HiOutlineCurrencyDollar,
    HiOutlineUserAdd,
    HiOutlineCog,
    HiOutlineX,
    HiOutlineStar,
    HiOutlineChartBar,
    HiOutlineSpeakerphone
} from 'react-icons/hi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', href: '/dashboard', icon: HiOutlineHome },
        { name: 'Employees', href: '/employees', icon: HiOutlineUsers },
        { name: 'Attendance', href: '/attendance', icon: HiOutlineCalendar },
        { name: 'Leave', href: '/leave', icon: HiOutlineCollection },
        { name: 'Payroll', href: '/payroll', icon: HiOutlineCurrencyDollar },
        { name: 'Performance', href: '/performance', icon: HiOutlineStar },
        { name: 'Recruitment', href: '/recruitment', icon: HiOutlineUserAdd },
        { name: 'Reports', href: '/reports', icon: HiOutlineChartBar },
        { name: 'Announcements', href: '/announcements', icon: HiOutlineSpeakerphone },
        { name: 'Settings', href: '/settings', icon: HiOutlineCog },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed left-0 top-0 h-full w-64 glass border-r border-white/10 z-50 flex flex-col transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="p-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent italic">
                        TalentTrack
                    </h1>
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <HiOutlineX className="h-5 w-5 text-gray-400" />
                    </button>
                </div>

                <nav className="flex-1 px-4 mt-4 overflow-y-auto">
                    <ul className="space-y-2">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                                        className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${isActive
                                                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        <item.icon className={`h-6 w-6 ${isActive ? 'text-indigo-400' : 'group-hover:text-white'}`} />
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="p-4 border-t border-white/5">
                    <div className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                            AD
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">Aditya Sharma</p>
                            <p className="text-xs text-gray-500">Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
