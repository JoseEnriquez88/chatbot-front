"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  addUserMessage,
  sendMessage,
  setDraft,
} from "@/store/features/chatSlice";
import type { AppDispatch, RootState } from "@/store/store";
import { motion } from "framer-motion";

export default function ChatInput() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const draft = useSelector((s: RootState) => s.chat.draft);

  const handleSend = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    dispatch(addUserMessage(trimmed));
    dispatch(sendMessage(trimmed));
    dispatch(setDraft(""));
  };

  return (
    <motion.form
      className="flex w-full gap-2 items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onSubmit={(e) => {
        e.preventDefault();
        handleSend();
      }}
    >
      <motion.input
        type="text"
        value={draft}
        onChange={(e) => dispatch(setDraft(e.target.value))}
        placeholder="Escribe una pregunta..."
        className="flex-grow px-4 py-3 rounded-2xl bg-white/10 focus:bg-white/20 placeholder-white text-white font-bold outline-none shadow-lg transition-colors duration-200"
      />

      <motion.button
        type="submit"
        whileTap={{ scale: 0.9 }}
        className="px-4 py-3 bg-pc-violet-100 hover:bg-pc-violet-300 text-white font-bold rounded-2xl shadow-lg transition-colors duration-300"
      >
        Enviar
      </motion.button>

      <motion.button
        type="button"
        onClick={() => router.push("/")}
        whileTap={{ scale: 0.9 }}
        className="hidden md:block px-4 py-3 bg-pc-black hover:bg-pc-violet-300 text-white font-bold rounded-2xl shadow transition-colors duration-300 gap-2"
      >
        Volver
      </motion.button>
    </motion.form>
  );
}
