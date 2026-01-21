"use client";
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLoginPage = pathname === '/login';

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden">
          {!isLoginPage && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
          <div className={`flex-1 flex flex-col relative overflow-hidden ${!isLoginPage ? 'lg:ml-64' : ''}`}>
            {!isLoginPage && <Navbar toggleSidebar={toggleSidebar} />}
            <main className={`flex-1 overflow-y-auto ${!isLoginPage ? 'pt-20 px-4 lg:px-6 pb-6' : ''}`}>
              <div className={`${!isLoginPage ? 'max-w-7xl mx-auto w-full' : 'h-full'}`}>
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
