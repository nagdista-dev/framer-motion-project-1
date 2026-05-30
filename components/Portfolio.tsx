"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import placeholderImage1 from '@/public/images/proj5.png';
import placeholderImage2 from '@/public/images/proj8.png';
import placeholderImage3 from '@/public/images/proj11.png';

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const projects = [
  {
    id: 1,
    year: 2023,
    title: 'Doodle - customer support chatbot',
    description:
      "We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle's customer support inquiries, freeing up their team to focus on more complex issues.",
    image: placeholderImage1,
  },
  {
    id: 2,
    year: 2024,
    title: 'Dash - AI calling system', 
    description:
      "We developed Dash, an AI-powered calling system that enhances customer communication and support with automated features.",
    image: placeholderImage2,
  },
  {
    id: 3,
    year: 2024,
    title: 'Atomic - AI driven outreach',
    description:
      "Atomic is our AI-driven outreach tool that maximizes engagement and conversions through intelligent automation.",
    image: placeholderImage3,
  },
]


const COLORS_TOP = ["#8A2BE2", "#9370DB", "#9932CC", "#800080"];

const Portfolio = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #000 50%, ${color})`;

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="py-32 min-h-[85vh] backgroundImage bg-black text-white"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-purple-300">projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-purple-300 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-purple-500 transition-colors duration-300 ${
                  selectedProject.id === project.id ? 'text-purple-300' : ''
                }`}
              >
                {project.title} ↗
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-b-2 border-purple-300 my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p
                  className={`text-gray-400 transition-all duration-500 ease-in-out ${
                    selectedProject.id === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={selectedProject.image.src}
            alt={selectedProject.title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio