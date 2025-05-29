"use client";
import logo from "@/assets/logo.webp";
import Image from "next/image";
const loading = () => {
  return (
    <div className="bg-pc-violet h-screen w-screen flex flex-col items-center justify-center gap-4">
      <Image
        src={logo}
        alt="logo"
        priority
        className="size-30 animate-spin"
      />
      <h1 className="font-pc-bebas font-bold text-pc-white text-4xl animate-pulse">
        cargando
      </h1>
    </div>
  );
};
export default loading;
