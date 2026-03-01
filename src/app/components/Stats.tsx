import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useState, useEffect } from "react";

function AnimatedCounter({ end, suffix = "", isInView }: { end: number; suffix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);
  return <>{count}{suffix}</>;
}

const stats = [
  { value: 50, suffix: "+", label: "Project", sub: "Selesai" },
  { value: 40, suffix: "+", label: "Klien", sub: "Puas" },
  { value: 3, suffix: "", label: "Tahun", sub: "Pengalaman" },
  { value: 98, suffix: "%", label: "Tingkat", sub: "Kepuasan" },
];

export function Stats() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-0 relative overflow-hidden" ref={ref}>
      {/* Large scrolling numbers background */}
      <div className="relative">
        {/* Animated background strip */}
        <div className="bg-neutral-900 py-16 md:py-20 relative overflow-hidden">
          {/* Grid bg */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />

          {/* Floating circles */}
          <motion.div
            className="absolute top-[20%] left-[5%] w-48 h-48 rounded-full border border-white/5"
            animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[10%] right-[8%] w-32 h-32 rounded-full bg-white/[0.02]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Large faded scrolling text behind */}
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(2)].map((_, j) => (
                <div key={j} className="flex gap-12">
                  {stats.map((s, i) => (
                    <span
                      key={`bg-${j}-${i}`}
                      className="text-[8rem] md:text-[12rem] text-white/[0.03] select-none"
                      style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}
                    >
                      {s.value}{s.suffix}
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Actual stats */}
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="text-center relative group py-4"
                >
                  {/* Vertical divider */}
                  {i > 0 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                      className="hidden md:block absolute left-0 top-[20%] bottom-[20%] w-px bg-white/10 origin-top"
                    />
                  )}
                  <p
                    className="text-[3rem] md:text-[4rem] text-white mb-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, lineHeight: 1 }}
                  >
                    <AnimatedCounter end={s.value} suffix={s.suffix} isInView={isInView} />
                  </p>
                  <p className="text-neutral-400 text-[0.875rem]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                    {s.label}
                  </p>
                  <p className="text-neutral-600 text-[0.75rem]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {s.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
