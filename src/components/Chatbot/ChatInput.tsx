"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addUserMessage, sendMessage } from "@/store/features/chatSlice";
import type { AppDispatch } from "@/store/store";
import { motion } from "framer-motion";

export default function ChatInput() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleBack = () => router.push("/");
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
    <motion.form
      className="flex w-full gap-2 items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <motion.input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe una pregunta..."
        className="flex-grow px-4 py-3 rounded-2xl bg-white/10 focus:bg-white/20 placeholder-white text-white font-bold outline-none shadow-lg transition-colors duration-200"
      />
      <motion.button
        type="button"
        onClick={handleSend}
        whileTap={{ scale: 0.9 }}
        className="px-4 py-3 bg-pc-violet-100 hover:bg-pc-violet-300 text-white font-bold rounded-2xl shadow-lg transition-colors duration-300 cursor-pointer"
      >
        Enviar
      </motion.button>
      <motion.button
        type="button"
        onClick={handleBack}
        whileTap={{ scale: 0.9 }}
        className="hidden md:block px-4 py-3 bg-pc-black hover:bg-pc-violet-300 text-white font-bold rounded-2xl shadow transition-colors duration-300 gap-2 cursor-pointer"
      >
        Volver
      </motion.button>
    </motion.form>
  );
}
