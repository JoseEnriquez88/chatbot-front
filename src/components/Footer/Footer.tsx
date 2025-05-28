"use client";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import logo from "@/assets/logo.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
      className="bg-transparent border border-solid border-gray-800 w-full h-[100px] pt-[24px] px-[8px] pb-[56px] flex flex-col items-center gap-1"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <div className="flex items-center gap-1">
        <Image src={logo} alt="logo" loading="lazy" className="size-4" />
        <a
          href="https://www.promtior.ai/"
          target="_blank"
          rel="noreferrer"
          className="font-pc-bebas text-pc-white text-lg hover:text-violet-400 transition-colors duration-300 ease-in-out cursor-pointer"
        >
          promtior
        </a>
      </div>
      <p className="text-pc-white font-pc-lato text-xs md:text-sm leading-[20px] tracking-normal flex font-bold">
        Desarrollado por
        <a
          href="https://enriquez-jose.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="underline ml-1 flex items-center gap-1 hover:text-violet-400 transition-colors duration-300 ease-in-out cursor-pointer"
        >
          Jose Enriquez
          <MdArrowOutward />
        </a>
      </p>
    </motion.footer>
  );
}
