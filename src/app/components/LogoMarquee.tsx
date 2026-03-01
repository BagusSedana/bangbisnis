import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const logos = [
  { name: "TechFlow", icon: "T" },
  { name: "Kreativa", icon: "K" },
  { name: "NutriFit", icon: "N" },
  { name: "Skyward", icon: "S" },
  { name: "Lumina", icon: "L" },
  { name: "Nexora", icon: "N" },
  { name: "Vantage", icon: "V" },
  { name: "Elevate", icon: "E" },
  { name: "Synthex", icon: "S" },
  { name: "Pinnacle", icon: "P" },
];

export function LogoMarquee() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="py-20 px-6 overflow-hidden relative" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-white" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center text-neutral-400 text-[0.75rem] tracking-widest uppercase mb-12 relative z-10"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Dipercaya oleh brand-brand ternama
      </motion.p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-100 bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-300 cursor-default group"
            >
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-[0.8125rem] text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}
              >
                {logo.icon}
              </div>
              <span
                className="text-[0.9375rem] text-neutral-400 group-hover:text-neutral-700 transition-colors"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
