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
    <form className="flex w-full gap-2 items-center font-pc-lato">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe una pregunta..."
        className="flex-grow min-w-0 px-4 py-3 rounded-2xl bg-white/10 focus:bg-white/20 placeholder-white text-white font-bold outline-none shadow-lg transition-colors duration-200"
      />
      <button
        type="button"
        onClick={handleSend}
        className="flex-shrink-0 px-4 py-3 bg-pc-violet-100 hover:bg-pc-violet-300 text-white font-bold rounded-2xl shadow-lg transition-colors duration-300 cursor-pointer"
      >
        Enviar
      </button>

      <button
        type="button"
        onClick={handleBack}
        className="flex-shrink-0 px-4 py-3 bg-pc-black hover:bg-pc-violet-300 text-white font-bold rounded-2xl shadow transition-colors duration-300 flex items-center gap-2 cursor-pointer"
      >
        Volver
      </button>
    </form>
  );
}
