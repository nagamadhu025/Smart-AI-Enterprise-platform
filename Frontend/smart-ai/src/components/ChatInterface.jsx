import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { UI_PROMPTS } from '@/config/ui-text';
import {
    Send, Paperclip,
    LayoutDashboard, FileText, Zap,
    MessageSquare, CheckCircle, Cpu,
    UploadCloud, Database,
    Code, Terminal, Server
} from 'lucide-react';

// Helper to map icon strings to components
const IconMap = {
    "bar-chart": LayoutDashboard,
    "file-text": FileText,
    "zap": Zap,
    "message-square": MessageSquare,
    "check-circle": CheckCircle,
    "cpu": Cpu,
    "upload-cloud": UploadCloud,
    "file-search": FileText,
    "database": Database,
    "code": Code,
    "terminal": Terminal,
    "server": Server
};

const ChatInterface = ({ mode = 'chat', isPage = false }) => {
    const config = UI_PROMPTS[mode] || UI_PROMPTS.chat;
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/chat', {
                messages: [...messages, userMessage]
            });

            setMessages(prev => [...prev, response.data]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // If isPage is true, we assume it's embedded in a glass card already, so we just fill height.
    // If NOT isPage (standalone), we give it the glass styling.

    return (
        <div className={`flex flex-col ${isPage ? 'h-full bg-transparent' : 'h-screen bg-space-950 p-4'}`}>
            <div className={`flex-1 w-full ${isPage ? '' : 'rounded-2xl glass-panel'} overflow-hidden flex flex-col relative`}>

                {/* Header */}
                {!isPage && (
                    <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/10 backdrop-blur-md">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-lg bg-neon-purple/20 text-neon-purple border border-neon-purple/50 flex items-center justify-center mr-3 font-bold shadow-[0_0_10px_rgba(139,92,246,0.2)]">AI</div>
                            <span className="font-semibold text-white">{config.title}</span>
                        </div>
                    </div>
                )}

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6 relative scrollbar-hide">

                    {/* Empty State / Hero Section */}
                    {messages.length === 0 && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-0 opacity-100 transition-opacity duration-500">
                            <div className="space-y-6 max-w-2xl mx-auto">
                                <div className="flex justify-center space-x-4 mb-4">
                                    {config.icons.map((iconName, idx) => {
                                        const Icon = IconMap[iconName] || MessageSquare;
                                        return (
                                            <div key={idx} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-neon-cyan flex items-center justify-center shadow-lg hover:shadow-neon-cyan/20 transition-all">
                                                <Icon size={24} />
                                            </div>
                                        );
                                    })}
                                </div>
                                <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-300 tracking-tight drop-shadow-lg">{config.title}</h1>
                                <p className="text-gray-400 text-lg">{config.subtitle}</p>
                            </div>
                        </div>
                    )}

                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-5 py-4 backdrop-blur-sm border ${msg.role === 'user'
                                    ? 'bg-neon-purple/10 border-neon-purple/30 text-white rounded-br-none shadow-[0_0_15px_rgba(139,92,246,0.1)]'
                                    : 'bg-white/5 border-white/10 text-gray-200 rounded-bl-none'
                                    }`}
                            >
                                <div className="markdown-body text-sm md:text-base whitespace-pre-wrap leading-relaxed">
                                    {msg.content}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start relative z-10">
                            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-none px-5 py-4">
                                <div className="flex space-x-2">
                                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-6 relative z-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/10 focus-within:border-neon-cyan/50 focus-within:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all">
                            <button className="text-gray-500 hover:text-neon-cyan transition-colors p-1">
                                <Paperclip size={20} />
                            </button>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder={config.placeholder}
                                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-600 text-base"
                            />
                            <button
                                onClick={sendMessage}
                                disabled={isLoading || !input.trim()}
                                className={`p-2 rounded-xl transition-all ${isLoading || !input.trim()
                                    ? 'bg-white/5 text-gray-600'
                                    : 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-lg hover:shadow-neon-cyan/40 transform hover:scale-105'
                                    }`}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                        <div className="text-center mt-3 flex items-center justify-center space-x-6 text-xs text-gray-500 font-medium">
                            <span className="hover:text-neon-cyan cursor-pointer transition-colors">💬 Ask questions</span>
                            <span className="hover:text-neon-cyan cursor-pointer transition-colors">📄 Upload documents</span>
                            <span className="hover:text-neon-cyan cursor-pointer transition-colors">⚙️ Get actionable solutions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
