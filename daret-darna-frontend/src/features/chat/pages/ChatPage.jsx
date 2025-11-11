import React, { useEffect } from 'react';
import ChatSidebar from '../components/ChatSidebar';
import ChatWindow from '../components/ChatWindow';
import { useChatSocket } from '../hooks/useChatSocket';

const ChatPage = () => {
  const { conversations, activeConversation, selectConversation, connect } = useChatSocket();

  useEffect(() => {
    connect();
  }, [connect]);

  return (
    <div className="mx-auto flex h-[calc(100vh-5rem)] max-w-6xl gap-4 p-4">
      <ChatSidebar conversations={conversations} onSelect={selectConversation} activeConversation={activeConversation} />
      <ChatWindow conversation={activeConversation} />
    </div>
  );
};

export default ChatPage;
