import Image from "next/image";
import Form from "./components/form";
import SoftCursor from "./components/softCursor";
import { motion } from "framer-motion";

export default function Home() {
  const date = new Date();
  return (
    <div className="flex flex-col lg:grid grid-cols-6 items-center justify-items-center min-h-screen p-0 m-0 font-[family-name:var(--font-geist-sans)]">
      {/* Left Side */}
      <div className="flex flex-col items-start justify-start bg-blue-700 h-full w-full p-8 lg:col-span-4 bg-[url('/grid.png')]">
        <div className="h-full">
          <p className="text-6xl lg:text-[10rem] font-bold text-left text-white z-10 ">
            HandHeld<span className="text-amber-400">*</span>
          </p>

      
          <p className="text-lg mt-4  lg:mt-0 lg:text-2xl font-semibold text-left text-white z-10">
            You're not alone on your tech journey.<br></br>
          </p>
          <p className="text-left text-white z-10 font-light">
            We connect curious, passionate learners with experienced mentors
            <br></br>who’ve been where you are—so you can grow with guidance,
            not guesswork.
          </p>
          <Image
            alt="3d character"
            src={"/sally.png"}
            width={500}
            height={500}
            className="absolute bottom-0 right-50 z-0 greyscale-[100%] hidden lg:block"
          />
        </div>

        <p className="text-sm hidden lg:block">handheld © · {date.getFullYear()}</p>
      </div>

      {/* Right Side */}
      <div className="relative w-full h-full lg:col-span-2 overflow-y-clip bg-[url('/grid.png')] bg-cover bg-center">
        <Form />
      </div>
      <SoftCursor />
    </div>
  );
}
