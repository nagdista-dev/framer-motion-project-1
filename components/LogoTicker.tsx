"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import udemy from "@/public/images/udemy.png";
import fiverr from "@/public/images/fiverr.png";
import elementor from "@/public/images/elementor.png";
import logitech from "@/public/images/logitech.png";
import oracle from "@/public/images/oracle.png";
// Define an array of image objects, currently empty
const images = [
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
];

const LogoTicker = () => {
  return (
    <div className="py-8 bg-purple-200/10 opacity-80 border border-gray-800 bg-linear-to-br from-white/10 to-transparent backdrop-blur-md shadow-lg">
      <div className="container mx-auto">
        <div className="overflow-hidden ">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, idx) => (
              <Image key={idx} src={image.src} alt={image.alt} height={30} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
