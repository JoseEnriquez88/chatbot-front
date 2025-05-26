"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import ChatHistory from "@/components/Chatbot/ChatHistory";
import ChatInput from "@/components/Chatbot/ChatInput";

export default function ChatPage() {
  const { loading, error } = useSelector((state: RootState) => state.chat);

  return (
    <main className="flex flex-col h-screen p-4 bg-pc-violet font-pc-lato text-pc-white md:px-[600px]">
      <div className="flex-1 overflow-y-auto scrollbar-none rounded-md p-4 shadow md:pt-[150px]">
        <ChatHistory />
      </div>
      <div className="mt-4">
        <ChatInput />
        {loading && (
          <p className="text-sm text-gray-500 mt-2">Cargando respuesta...</p>
        )}
        {error && <p className="text-sm text-red-500 mt-2">Error: {error}</p>}
      </div>
    </main>
  );
}
