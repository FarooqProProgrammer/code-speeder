"use client";

import React, { useState } from 'react';
import ChatPanel from '@/components/ui/chat-panel';
import PreviewPanel from '@/components/ui/preview-panel';
import { Navbar } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

interface InspectedElement {
  tagName: string;
  id?: string;
  className?: string;
  styles?: Record<string, string>;
  attributes?: Record<string, string>;
  innerHTML?: string;
}

export default function DashboardPage() {
  const [inspectedElement, setInspectedElement] = useState<InspectedElement | null>(null);
  const [isChatPanelCollapsed, setIsChatPanelCollapsed] = useState(false);

  const handleElementInspect = (element: InspectedElement) => {
    setInspectedElement(element);
  };

  const handleSendMessage = (message: string, attachments?: any[]) => {
    console.log('Message sent:', message);
    console.log('Attachments:', attachments);
    // Here you can add logic to process the message and interact with the iframe
  };

  return (
    <div className="min-h-screen font-sans bg-[#f5f5dc] bg-[radial-gradient(#707070_1px,transparent_1px)] bg-size-[20px_20px] dark:bg-[#2d2d2d] dark:bg-[radial-gradient(#a0a0a0_1px,transparent_1px)]">
      {/* Navbar */}
      <Navbar />

      {/* Main Dashboard Container */}
      <div className="h-[calc(100vh-4rem)] relative flex">
        {/* Chat Panel - Left Side */}
        <div
          className={`transition-all duration-300 ${
            isChatPanelCollapsed ? 'w-0' : 'w-full md:w-[400px] lg:w-[450px]'
          }`}
        >
          {!isChatPanelCollapsed && (
            <ChatPanel
              inspectedElement={inspectedElement}
              onSendMessage={handleSendMessage}
              className="h-full"
            />
          )}
        </div>

        {/* Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-r-lg rounded-l-none shadow-lg"
          style={{
            left: isChatPanelCollapsed ? '0' : 'calc(400px - 20px)',
            transition: 'left 0.3s',
          }}
          onClick={() => setIsChatPanelCollapsed(!isChatPanelCollapsed)}
        >
          {isChatPanelCollapsed ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </Button>

        {/* Preview Panel - Right Side */}
        <div className="flex-1 min-w-0">
          <PreviewPanel
            onElementInspect={handleElementInspect}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}
