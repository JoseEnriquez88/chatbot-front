"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import MessageBubble from "./MessageBubble";
import { AnimatePresence, motion } from "framer-motion";

export default function ChatHistory() {
  const messages = useSelector((s: RootState) => s.chat.messages);

  return (
    <div className="flex flex-col gap-2">
      <AnimatePresence initial={false}>
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <MessageBubble role={msg.role} text={msg.text} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
