"use client";
import { useState } from 'react';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineArrowRight } from 'react-icons/hi';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => (window.location.href = '/dashboard'), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-vibrate"></div>
      <div className="absolute -bottom-8 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-vibrate"></div>

      <div className="w-full max-w-md glass p-10 rounded-3xl border border-white/10 z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            TalentTrack
          </h1>
          <p className="text-gray-400 mt-2">Sign in to manage your workforce</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">Work Email</label>
            <div className="relative">
              <HiOutlineMail className="absolute left-4 top-3.5 text-gray-500 h-5 w-5" />
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">Password</label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-4 top-3.5 text-gray-500 h-5 w-5" />
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:text-white transition-colors">
              <input type="checkbox" className="rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center space-x-2 mt-4"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
            {!loading && <HiOutlineArrowRight className="h-5 w-5" />}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          Don't have an account? <a href="#" className="text-white font-bold hover:underline">Contact Admin</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
