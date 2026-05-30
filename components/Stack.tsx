import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { SiFramer, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { useEffect } from "react";
export default function Stack() {
  const COLORS_TOP = ["#f00", "#0f0", "#00f"];
  const STACK_ITEMS = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#f0f000" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Framer", icon: SiFramer, color: "#0055ff" },
  ];
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 100% ,#000 50% , ${color}  )`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section style={{ backgroundImage }} className=" py-32 px-4 ">
      <motion.div
        className="max-w-300 mx-auto "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl text-center font-bold mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tech <span className="text-purple-300">Stack</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
          {STACK_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group "
            >
              <div className="flex items-center justify-center flex-col">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500/40  to-blue-500/40 rounded-xl blur group-hover:border-purple-500/50 transition-colors duration-300" />
                  <div className="relative p-4 rounded-4xl bg-gray-900/50 border border-gray-800 group-hover:border-purple-500 transition-colors duration-300">
                    <item.icon
                      className="w-12 h-12"
                      style={{ color: item.color }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
