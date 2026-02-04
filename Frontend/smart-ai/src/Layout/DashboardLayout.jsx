import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Search, Bell, User } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="flex h-screen w-full overflow-hidden bg-transparent relative"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Spotlight Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(232, 121, 249, 0.2), transparent 40%)`
        }}
      ></div>

      {/* Sidebar - Floating */}
      <div className="z-20 h-full p-4 hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative z-10 p-4 pl-0">

        {/* Top Glass Bar */}
        <header className="h-16 mb-4 rounded-2xl glass-panel flex items-center justify-between px-6 z-20 mx-4 md:ml-0 md:mr-4 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative w-96 hidden md:block z-10">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-neon-cyan transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-black/20 text-white pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 border border-white/5 placeholder-gray-500 transition-all group-hover:bg-black/30"
            />
          </div>
          <div className="flex items-center space-x-4 z-10">
            <button className="p-2 text-gray-400 hover:text-white transition-colors relative hover:scale-110 duration-200">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full animate-pulse"></span>
            </button>
            <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan p-[1px] shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                <div className="w-full h-full rounded-full bg-space-900 flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto rounded-2xl glass-panel mx-4 md:ml-0 md:mr-4 p-6 scrollbar-hide relative z-10 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-shadow duration-500">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
