"use client";
import IMAGES from "@/public/image";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Hero() {
  const COLORS_TOP = ["#f00", "#0f0", "#00f"];

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% ,#000 50% , ${color}  )`;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="z-0 absolute inset-0">
        <Canvas>
          <Stars radius={50} count={600} factor={8} speed={3} fade />
        </Canvas>
      </div>
      <div className="z-10 max-w-6xl mx-auto flex flex-col  md:flex-row items-center justify-between gap-12">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start"
        >
          <motion.p
            style={{ borderColor: color }}
            className="flex items-center justify-between gap-2 mb-3  px-4 py-1 text-sm border  rounded-full"
          >
            <motion.span
              className="w-2 h-2 rounded-full animate-pulse bg-white"
              style={{ backgroundColor: color }}
            />
            Available for new projects
          </motion.p>
          <p className="text-4xl md:text-5xl font-bold">HI, I am </p>
          <p className="bg-linear-to-r from-white to-purple-400 bg-clip-text text-4xl md:text-6xl text-transparent">
            Mahmoud Alnagdy
          </p>
          <p className="max-w-100 mt-4 text-base">Full Stack Developer</p>
          <div className="flex justify-between gap-5 mt-6">
            <motion.button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{ border }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="px-4 py-2 rounded-full flex items-center gap-2 text-sm cursor-pointer"
            >
              <FiDownload className="text-lg" />
              Download CV
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{ border, boxShadow }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="px-4 py-2 rounded-full flex items-center gap-2 text-sm cursor-pointer"
            >
              View Projects
              <FiArrowRight />
            </motion.button>
          </div>
        </motion.div>
        {/* PICTURES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Image Background */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-40"
            style={{
              background: `radial-gradient(circle,rgba(255,255,255,0.5),transparent 70%)`,
            }}
          />
          <div>
            <Image
              src={IMAGES.profileImage}
              alt="profile pic"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity }}
            className="absolute -bottom-2 -right-2"
          >
            Developer
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
