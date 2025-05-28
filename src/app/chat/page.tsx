"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import ChatHistory from "@/components/Chatbot/ChatHistory";
import ChatInput from "@/components/Chatbot/ChatInput";

export default function ChatPage() {
  const { loading, error } = useSelector((state: RootState) => state.chat);

  return (
    <main className="flex flex-col h-screen bg-pc-violet font-pc-lato text-pc-white overflow-x-hidden">
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="mx-auto w-full max-w-screen-lg">
          <ChatHistory />
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="mx-auto w-full max-w-screen-lg">
          {loading && (
            <p className="text-sm font-bold text-pc-white mb-2">Cargando…</p>
          )}
          {error && (
            <p className="text-sm font-bold text-red-400 mb-2">
              Error: {error}
            </p>
          )}
          <ChatInput />
        </div>
      </div>
    </main>
  );
}
