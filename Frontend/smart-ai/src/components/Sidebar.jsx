import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, FileText, History, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={22} /> },
    { name: 'AI Chat', path: '/ai/chat', icon: <MessageSquare size={22} /> },
    { name: 'History', path: '/ai/history', icon: <History size={22} /> },
    { name: 'Documents', path: '/documents', icon: <FileText size={22} /> },
  ];

  return (
    <div
      className={`${isCollapsed ? 'w-20' : 'w-72'} h-full rounded-2xl glass-panel text-gray-300 flex flex-col transition-all duration-300 ease-in-out relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-10 bg-neon-purple text-white p-1 rounded-full shadow-lg hover:shadow-neon-purple transition-all z-30"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Logo Area */}
      <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : ''} border-b border-white/10`}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-cyan to-neon-purple flex-shrink-0 flex items-center justify-center font-bold text-white shadow-lg shadow-neon-cyan/30">
          AI
        </div>
        {!isCollapsed && (
          <div className="ml-3 overflow-hidden whitespace-nowrap">
            <h1 className="text-xl font-bold tracking-tight text-white">Smart AI</h1>
            <p className="text-xs text-neon-cyan font-medium">Futuristic Platform</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3.5 rounded-xl transition-all duration-300 group ${isActive
                ? 'bg-neon-purple/20 text-white border border-neon-purple/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                : 'hover:bg-white/5 hover:text-white hover:border hover:border-white/10'
              } ${isCollapsed ? 'justify-center' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                <span className={`transition-colors duration-300 ${isActive ? 'text-neon-cyan' : ''} ${isCollapsed ? '' : 'mr-4'}`}>{item.icon}</span>
                {!isCollapsed && (
                  <span className="font-medium tracking-wide whitespace-nowrap">{item.name}</span>
                )}

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-3 py-1.5 glass-panel text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50">
                    {item.name}
                  </div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-white/10">
        <NavLink
          to="/settings"
          className={`flex items-center px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition-all duration-200 group ${isCollapsed ? 'justify-center' : ''}`}
        >
          <Settings size={22} className={`${isCollapsed ? '' : 'mr-4'} transition-transform group-hover:rotate-90 text-gray-400 group-hover:text-neon-cyan`} />
          {!isCollapsed && <span className="font-medium">Settings</span>}
        </NavLink>
        <button className={`w-full mt-2 flex items-center px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 ${isCollapsed ? 'justify-center' : ''}`}>
          <LogOut size={22} className={`${isCollapsed ? '' : 'mr-4'}`} />
          {!isCollapsed && <span className="font-medium">Sign Out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
