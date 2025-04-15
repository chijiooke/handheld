"use client";
import Image from "next/image";
import Form from "./components/form";
import SoftCursor from "./components/softCursor";
import { motion } from "framer-motion";
import AnimatedText from "./components/animatedText";

export default function Home() {
  const date = new Date();
  const participants = [
    {
      name: "Mentee",
      description:
        "Learn with guidance. Grow with confidence. Skip the guesswork—connect with mentors who understand your path and are here to help.",
      image: "/mentee.png",
    },
    {
      name: "Mentor",
      description:
        "Share your experience. Shape a journey. Inspire the next generation by guiding curious minds. Your insight can make a real difference.",
      image: "/mentor.png",
    },
    {
      name: "Sponsor",
      description:
        "Odogwu on the block. Support the future. Be a part of something bigger. Your sponsorship can empower learners and mentors alike.",
      image: "/sponsor.png",
    },
  ];

  return (
    <div className="flex flex-col lg:grid grid-cols-6 items-center justify-items-center min-h-screen p-0 m-0 font-[family-name:var(--font-geist-sans)]">
      {/* Left Side */}
      <div className="flex flex-col items-start justify-start bg-blue-700 h-full w-full p-8 lg:col-span-4 bg-[url('/grid.png')]">
        <div className="h-full">
          <AnimatedText />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg mt-4 lg:mt-0 lg:text-2xl font-semibold text-left text-white z-10"
          >
            You&#39;re not alone on your tech journey.<br />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-left text-white z-10 font-light"
          >
            We connect curious, passionate learners with experienced mentors
            <br />
            who&#39;ve been where you are—so you can grow with guidance, not guesswork.
          </motion.p>

          <Image
            alt="3d character"
            src={"/sally.png"}
            width={500}
            height={500}
            className="absolute bottom-0 right-50 z-0 greyscale-[100%] hidden lg:block"
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-28 w-fit gap-4">
            {participants?.map((participant, ind) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: ind * 1 }}
                className="lg:w-[200px] max-w-md rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm"
              >
                <Image
                  alt="grid"
                  src={participant.image}
                  width={200}
                  height={200}
                  className="w-full lg:w-[200px] bg-amber-400"
                />
                <div className="p-2">
                  <p className="text-lg font-semibold">{participant.name}</p>
                  <p className="text-sm font-light">
                    {participant.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-sm hidden lg:block">
          handheld © · {date.getFullYear()}
        </p>
      </div>

      {/* Right Side */}
      <div className="relative w-full h-full lg:col-span-2 overflow-y-clip bg-[url('/grid.png')] bg-cover bg-center">
        <Form />
      </div>
      <SoftCursor />
    </div>
  );
}
