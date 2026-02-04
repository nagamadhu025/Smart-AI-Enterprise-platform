import React from 'react';
import DashboardLayout from "@/Layout/DashboardLayout";
import ChatInterface from '@/components/ChatInterface';

export default function Documents() {
    return (
        <DashboardLayout>
            <div className="h-[calc(100vh-8rem)] -m-6 md:-m-8">
                <ChatInterface mode="documents" isPage={true} />
            </div>
        </DashboardLayout>
    );
}
