export type Message = {
  role: "user" | "bot";
  text: string;
};

export type MessageBubbleProps = {
  role: "user" | "bot";
  text: string;
};

export type VantaInstance = {
  destroy: () => void
}
