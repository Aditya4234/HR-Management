"use client";
import { HiOutlineSearch, HiOutlineBell, HiOutlineChatAlt, HiOutlineMenu } from 'react-icons/hi';

const Navbar = ({ toggleSidebar }) => {
    return (
        <header className="fixed top-0 right-0 lg:left-64 left-0 h-16 glass border-b border-white/10 z-40 flex items-center justify-between px-4 lg:px-8">
            {/* Mobile Menu Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors mr-3"
            >
                <HiOutlineMenu className="h-6 w-6 text-gray-400" />
            </button>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md hidden md:block">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <HiOutlineSearch className="h-5 w-5" />
                </span>
                <input
                    type="text"
                    placeholder="Search employees, tasks, reports..."
                    className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all text-gray-300 placeholder:text-gray-600"
                />
            </div>

            {/* Mobile: Just show logo text */}
            <div className="lg:hidden flex-1">
                <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    TalentTrack
                </h1>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-3 lg:space-x-6">
                <button className="relative p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
                    <HiOutlineChatAlt className="h-5 w-5 lg:h-6 lg:w-6" />
                    <span className="absolute top-1 right-1 h-2 w-2 bg-indigo-500 rounded-full"></span>
                </button>
                <button className="relative p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
                    <HiOutlineBell className="h-5 w-5 lg:h-6 lg:w-6" />
                    <span className="absolute top-1 right-1 h-2 w-2 bg-pink-500 rounded-full animate-pulse"></span>
                </button>
                <div className="hidden lg:block h-8 w-px bg-white/10"></div>
                <div className="flex items-center space-x-3 cursor-pointer hover:bg-white/5 p-1.5 rounded-xl transition-colors">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya"
                        alt="User"
                        className="h-8 w-8 lg:h-9 lg:w-9 rounded-lg border border-white/10 shadow-lg"
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
