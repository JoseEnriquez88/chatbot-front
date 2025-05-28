"use client";
import { motion } from "framer-motion";
import logo from "@/assets/logo.webp";
import Image from "next/image";
import LandingButton from "./LandingButton/LandingButton";
import Footer from "../Footer/Footer";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

export default function Landing() {
  return (
    <motion.div
      className="h-screen flex flex-col justify-between gradient-background overflow-hidden"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="flex flex-col items-center justify-center pt-[100px] px-[20px] md:pt-[200px] gap-6 text-pc-white">
        <motion.div variants={item}>
          <Image src={logo} alt="Promtior" loading="lazy" className="size-16" />
        </motion.div>
        <motion.h1
          variants={item}
          className="font-pc-bebas text-4xl md:text-5xl uppercase"
        >
          promtior chatbot
        </motion.h1>
        <motion.p
          variants={item}
          className="text-center text-base md:text-xl font-bold lg:font-medium font-pc-lato"
        >
          Un asistente inteligente que responde preguntas sobre Promtior.
        </motion.p>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LandingButton />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
}
