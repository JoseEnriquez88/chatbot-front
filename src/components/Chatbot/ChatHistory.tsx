"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import MessageBubble from "./MessageBubble";

export default function ChatHistory() {
  const messages = useSelector((state: RootState) => state.chat.messages);

  return (
    <div className="flex flex-col gap-2">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} role={msg.role} text={msg.text} />
      ))}
    </div>
  );
}
