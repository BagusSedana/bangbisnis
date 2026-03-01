import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const valueProps = [
  "Website dirancang untuk meningkatkan kepercayaan pelanggan",
  "Optimasi dasar SEO untuk visibilitas di Google",
  "Proses transparan & komunikasi langsung",
  "Support setelah website selesai",
];

export function Stats() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-0 relative overflow-hidden" ref={ref}>
      <div className="bg-neutral-900 py-12 md:py-16 relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        {/* Floating Background Accents */}
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

        {/* Marquee Content */}
        <div className="relative z-10 w-full overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...valueProps, ...valueProps].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3 px-6 rounded-full bg-white/[0.03] border border-white/5 whitespace-nowrap"
              >
                <div className="flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p
                  className="text-neutral-300 text-[0.9375rem]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
