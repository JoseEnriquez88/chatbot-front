import { MessageBubbleProps } from "@/models/types";

export default function MessageBubble({ role, text }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex bg-pc-violet font-pc-lato font-bold ${
        isUser ? "justify-end" : ""
      }`}
    >
      <div
        className={`p-4 whitespace-pre-wrap inline-block max-w-[80%] rounded-2xl shadow-2xl font-pc-lato font-bold ${
          isUser
            ? "bg-pc-violet-100 text-pc-white self-end"
            : "text-pc-white self-start"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
