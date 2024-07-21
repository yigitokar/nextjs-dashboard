"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';

const AIChat = dynamic(() => import('@/app/ui/AIChat'), { ssr: false });

export default function AIChatWrapper() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {showChat && <AIChat />}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        {showChat ? 'Close Chat' : 'Open Chat'}
      </button>
    </>
  );
}
