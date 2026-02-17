"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaDownload, FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const runningHighlights = [
  "Fast UI",
  "Responsive Web",
  "Mobile-First Apps",
  "Clean Architecture",
  "API Integration",
  "DevOps Mindset",
  "Production Ready",
];

const rotatingTaglines = [
  "I build fast, responsive, and modern applications for real business outcomes.",
  "From idea to production, I turn requirements into scalable digital products.",
  "I create web and mobile experiences that balance performance and usability.",
  "I help teams ship product features faster with clean and maintainable code.",
];

const CV_FILE_URL = "/assets/cv/CV%20-%20Christian%20Yuda%20Pratama.pdf";

const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20 pt-36">
      {/* UI: Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* UI: Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-[#eef2f8] dark:bg-grid-white/[0.03] bg-grid-black/[0.05]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for fading effect */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-[#eef2f8] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-indigo-700 dark:text-blue-100 max-w-80">
            Welcome to My Portfolio
          </p>

          {/* Text Effect */}
          <TextGenerateEffect
            words="Exploring My Digital Space Christian Yuda Pratama"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="mb-3 min-h-[56px] md:min-h-[64px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl text-slate-700 dark:text-slate-200"
              >
                {rotatingTaglines[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="w-full max-w-3xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] mb-6">
            <div className="flex w-max gap-3 animate-scroll [--animation-duration:26s]">
              {runningHighlights.map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
                  className="whitespace-nowrap rounded-full border border-indigo-400/40 dark:border-cyan-300/30 bg-indigo-500/10 px-3 py-1 text-[11px] md:text-xs text-indigo-700 dark:text-cyan-200"
                >
                  {item}
                </span>
              ))}
              {runningHighlights.map((item, idx) => (
                <span
                  key={`${item}-loop-${idx}`}
                  className="whitespace-nowrap rounded-full border border-indigo-400/40 dark:border-cyan-300/30 bg-indigo-500/10 px-3 py-1 text-[11px] md:text-xs text-indigo-700 dark:text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="#projects" className="block w-full">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position="right"
                className="h-14 w-full rounded-xl"
                otherClasses="text-base font-semibold rounded-xl"
              />
            </a>
            <a
              href={CV_FILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-indigo-400/50 dark:border-cyan-300/40 bg-white/90 dark:bg-slate-950/85 px-5 text-base font-semibold text-indigo-700 dark:text-cyan-200 hover:bg-indigo-100/80 dark:hover:bg-cyan-400/10 transition"
            >
              Download CV
              <FaDownload className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
