"use client";
import { useRouter } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export default function LandingButton() {
  const router = useRouter();
  const handleClick = () => router.push("/chat");

  return (
    <motion.button
      onClick={handleClick}
      variants={buttonVariants}
      initial="hidden"
      animate="show"
      className="bg-pc-violet hover:bg-pc-violet-100 font-pc-lato font-bold uppercase text-sm flex items-center gap-2 p-4 rounded-2xl cursor-pointer transition-colors duration-300 ease-in-out"
    >
      Probar chatbot <MdOutlineArrowOutward />
    </motion.button>
  );
}
