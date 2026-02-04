import React from 'react';
import DashboardLayout from "@/Layout/DashboardLayout";
import ChatInterface from "@/components/ChatInterface";
import { MessageSquare, FileText, Zap, Users, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: "Total Chats", value: "1,294", change: "+12%", icon: <MessageSquare size={24} />, color: "bg-neon-cyan shadow-neon-cyan" },
    { title: "Documents", value: "348", change: "+5.4%", icon: <FileText size={24} />, color: "bg-neon-purple shadow-neon-purple" },
    { title: "API Usage", value: "84.2k", change: "+24%", icon: <Zap size={24} />, color: "bg-pink-500 shadow-pink-500/50" },
  ];

  const recentActivity = [
    { id: 1, action: "New Chat Started", user: "John Doe", time: "2 mins ago", icon: <MessageSquare size={16} /> },
    { id: 2, action: "Document Uploaded", user: "Alice Smith", time: "15 mins ago", icon: <FileText size={16} /> },
    { id: 3, action: "API Key Generated", user: "System Admin", time: "1 hour ago", icon: <Zap size={16} /> },
    { id: 4, action: "Analysis Completed", user: "Marketing Team", time: "3 hours ago", icon: <TrendingUp size={16} /> },
  ];

  return (
    <DashboardLayout>


      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-white/10 transition-all"></div>

            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className={`p-3 rounded-xl text-white ${stat.color} shadow-lg`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full border border-white/10 ${stat.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium relative z-10">{stat.title}</h3>
            <p className="text-3xl font-bold text-white mt-1 relative z-10">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area (Placeholder) */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">Usage Analytics</h2>
            <select className="text-sm border border-white/10 rounded-lg text-gray-300 bg-black/20 p-2 outline-none focus:ring-2 focus:ring-neon-purple/50">
              <option>Last 7 Days</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 bg-black/20 rounded-xl flex items-center justify-center border border-dashed border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/10 to-transparent"></div>
            <p className="text-gray-400 font-medium flex items-center relative z-10">
              <TrendingUp className="mr-2 opacity-50 text-neon-cyan" />
              Interactive Usage Chart Loading...
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card p-6 rounded-2xl">
          <h2 className="text-lg font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan mr-4 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.user} • {item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm text-neon-cyan font-medium border border-neon-cyan/20 hover:bg-neon-cyan/10 rounded-lg transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            View All Activity
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
