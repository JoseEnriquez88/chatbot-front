"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addUserMessage, sendMessage } from "@/store/features/chatSlice";
import type { AppDispatch } from "@/store/store";

export default function ChatInput() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleBack = () => {
    router.push("/");
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    dispatch(addUserMessage(trimmed));
    dispatch(sendMessage(trimmed));
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex gap-2 font-pc-lato">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe una pregunta..."
        className="flex-1 px-4 py-3 rounded-2xl bg-white/10 focus:bg-white/20 text-white font-bold outline-none transition-colors duration-200"
      />
      <button
        onClick={handleSend}
        className="p-4 font-bold bg-pc-violet-100 hover:bg-pc-violet-300 text-white rounded-2xl shadow cursor-pointer transition-colors duration-300 ease-in-out"
      >
        Enviar
      </button>
      <button
        className="p-4 font-bold bg-pc-black hover:bg-pc-violet-300 text-white rounded-2xl shadow cursor-pointer transition-colors duration-300 ease-in-out flex items-center gap-2"
        onClick={handleBack}
      >
        Volver
      </button>
    </div>
  );
}
