"use client";
import { useRouter } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";

const LandingButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/chat");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-pc-violet hover:bg-pc-violet-100 font-pc-lato uppercase text-sm flex items-center gap-2 p-4 rounded-2xl cursor-pointer transition-colors duration-300 ease-in-out"
    >
      Probar chatbot <MdOutlineArrowOutward />
    </button>
  );
};
export default LandingButton;
