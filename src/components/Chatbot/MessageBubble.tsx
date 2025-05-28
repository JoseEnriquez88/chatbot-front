import { MessageBubbleProps } from "@/models/types";

export default function MessageBubble({ role, text }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full font-bold ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          p-4 whitespace-pre-wrap rounded-2xl shadow-md
          ${isUser
            ? "bg-pc-violet-100 text-pc-white w-auto max-w-[75%]"
            : "bg-pc-violet text-pc-white w-full"}
        `}
      >
        {text}
      </div>
    </div>
  );
}

