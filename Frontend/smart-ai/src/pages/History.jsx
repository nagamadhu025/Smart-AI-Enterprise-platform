import React from 'react';
import DashboardLayout from "@/Layout/DashboardLayout";
import { Clock, MessageSquare, MoreHorizontal } from 'lucide-react';

export default function History() {
    const historyItems = [
        { id: 1, title: "Project Phoenix Analysis", date: "Today, 10:23 AM", summary: "Discussed architectural changes for the new backend system..." },
        { id: 2, title: "Q3 Financial Report", date: "Yesterday, 4:15 PM", summary: "Summarized key revenue metrics and growth opportunities..." },
        { id: 3, title: "React Migration Plan", date: "Feb 2, 2026", summary: "Generated a step-by-step plan for migrating to Vite..." },
    ];

    return (
        <DashboardLayout>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Conversation History</h1>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {historyItems.map((item, index) => (
                        <div key={item.id} className={`p-6 hover:bg-gray-50 transition-colors flex items-start group cursor-pointer ${index !== historyItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                            <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mr-4">
                                <MessageSquare size={20} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                                    <span className="text-xs text-gray-400 flex items-center">
                                        <Clock size={12} className="mr-1" /> {item.date}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm mt-1 line-clamp-1">{item.summary}</p>
                            </div>
                            <button className="text-gray-300 hover:text-gray-600 p-2 opacity-0 group-hover:opacity-100 transition-all">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
