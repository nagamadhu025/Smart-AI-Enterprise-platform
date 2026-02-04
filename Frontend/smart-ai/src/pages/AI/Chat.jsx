import React from 'react';
import DashboardLayout from '@/layout/DashboardLayout';
import ChatInterface from '@/components/ChatInterface';

const Chat = () => {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-8rem)] -m-6 md:-m-8">
        <ChatInterface isPage={true} />
      </div>
    </DashboardLayout>
  );
};

export default Chat;
