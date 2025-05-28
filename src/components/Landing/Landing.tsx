"use client";
import logo from "@/assets/logo.webp";
import Image from "next/image";
import LandingButton from "./LandingButton/LandingButton";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-between gradient-background">
      <div className="flex flex-col items-center justify-center pt-[100px] px-[20px] md:pt-[200px] gap-6 text-pc-white">
        <Image src={logo} alt="Promtior" loading="lazy" className="size-16" />
        <h1 className="font-pc-bebas text-4xl md:text-5xl uppercase">
          promtior rag chatbot
        </h1>
        <p className="text-center text-base md:text-xl font-pc-lato">
          Un asistente inteligente que responde preguntas sobre Promtior.
        </p>
        <LandingButton />
      </div>
      <Footer />
    </div>
  );
};
export default Landing;
