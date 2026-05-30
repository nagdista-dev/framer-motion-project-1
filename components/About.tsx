"use client";
import { motion } from "framer-motion";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { FiCode, FiCpu, FiLayers, FiServer } from "react-icons/fi";

export default function About() {
  const COLORS_TOP = ["#f00", "#0f0", "#00f"];
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0% ,#000 50% , ${color}  )`;

  const SKILLS = [
    {
      icon: FiCode,
      title: "Title 1",
      description:
        "Description A B C D E F G J KD A D E E  E G R W QEW E E W T RY U W E D  ",
    },
    {
      icon: FiServer,
      title: "Title 2",
      description:
        "Description A B C D E F G J KD A D E E  E G R W QEW E E W T RY U W E D  ",
    },
    {
      icon: FiLayers,
      title: "Title 3",
      description:
        "Description A B C D E F G J KD A D E E  E G R W QEW E E W T RY U W E D  ",
    },
    {
      icon: FiCpu,
      title: "Title 4",
      description:
        "Description A B C D E F G J KD A D E E  E G R W QEW E E W T RY U W E D  ",
    },
  ];

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <motion.section 
    id="about"
      className="relative max-w-300 mx-auto p-5"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full  blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full  blur-3xl" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl text-white w-full text-center font-bold mb-16"
      >
        About <span className="text-purple-300">Me</span>
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
        >
          <div className="space-y-6  p-6">
            <p className="text-2xl font-semibold text-purple-300">MY Journey</p>
            <p className="text-gray-300 text-lg leading-relaxed">
              some text some textsome textsome textsome textsome textsome
              textsome textsome textsome textsome textsome textsome textsome
              textsome text
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              some text some textsome textsome textsome textsome textsome
              textsome textsome textsome textsome textsome textsome textsome
              textsome text
            </p>
          </div>
        </motion.div>
        <motion.div
          className="space-y-6 "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors duration-300 backdrop-blur-3xl "
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * idx }}
            >
              <div className="flex items-start gap-4">
                <div className=" p-3 rounded-lg bg-purple-500/10 text-purple-300">
                  <skill.icon className=" w-6 h-6" />
                </div>
                <div className="">
                  <h3 className=" text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className=" text-gray-400">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
