import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const tools = [
  { name: "React", letter: "R" },
  { name: "Next.js", letter: "N" },
  { name: "TypeScript", letter: "Ts" },
  { name: "Tailwind", letter: "Tw" },
  { name: "Figma", letter: "Fi" },
  { name: "WordPress", letter: "Wp" },
  { name: "Node.js", letter: "Nd" },
  { name: "Vercel", letter: "V" },
  { name: "Framer", letter: "Fr" },
  { name: "Webflow", letter: "Wf" },
];

export function TechStack() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 px-6 bg-neutral-950 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />
      <motion.div
        className="absolute top-[20%] left-[8%] w-48 h-48 rounded-full bg-white/[0.015]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-neutral-600 mb-5 mx-auto"
          />
          <p className="text-neutral-500 text-[0.8125rem] mb-3 tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
            Tech Stack
          </p>
          <h2 className="text-[1.75rem] md:text-[2.5rem] text-white tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, lineHeight: 1.15 }}>
            Tools yang kami gunakan
          </h2>
        </motion.div>

        {/* Orbit layout */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.07, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, y: -8, rotate: 3 }}
              className="group cursor-default"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1 hover:bg-white/10 hover:border-white/25 transition-all duration-300 relative overflow-hidden">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span
                  className="text-[1.25rem] text-white/70 group-hover:text-white transition-colors relative z-10"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}
                >
                  {tool.letter}
                </span>
                <span
                  className="text-[0.6rem] text-white/30 group-hover:text-white/60 transition-colors relative z-10"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {tool.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
