"use client";
import { useRouter } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { buttonVariants } from "@/utils/motion/motions.utilities";

export default function LandingButton() {
  const router = useRouter();
  const handleClick = () => router.push("/chat");

  return (
    <motion.button
      onClick={handleClick}
      initial="hidden"
      animate="show"
      variants={buttonVariants}
      className="bg-pc-violet hover:bg-pc-violet-100 font-pc-lato font-bold uppercase text-sm flex items-center gap-2 p-4 rounded-2xl cursor-pointer transition-colors duration-300 ease-in-out"
    >
      Probar chatbot <MdOutlineArrowOutward />
    </motion.button>
  );
}
