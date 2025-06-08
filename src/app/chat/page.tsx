"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { motion } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

import ChatHistory from "@/components/Chatbot/ChatHistory";
import ChatInput from "@/components/Chatbot/ChatInput";

export default function ChatPage() {
  const { loading, error } = useSelector((s: RootState) => s.chat);
  const router = useRouter();

  return (
    <motion.main
      className="relative flex flex-col h-dvh bg-pc-violet font-pc-lato text-pc-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        onClick={() => router.back()}
        className="fixed block md:hidden top-4 left-4 z-50 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <IoArrowBack size={24} className="text-white" />
      </motion.button>

      <motion.div
        className="flex-1 overflow-y-auto px-4 py-4 pt-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <div className="mx-auto w-full max-w-screen-lg">
          <ChatHistory />
        </div>
      </motion.div>

      <div className="px-4 py-4">
        <div className="mx-auto w-full max-w-screen-lg space-y-2">
          {loading && (
            <motion.p
              className="text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              Cargando…
            </motion.p>
          )}
          {error && (
            <motion.p
              className="text-sm text-red-400"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Error: {error}
            </motion.p>
          )}
          <ChatInput />
        </div>
      </div>
    </motion.main>
  );
}
