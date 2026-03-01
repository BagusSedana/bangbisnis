import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "CEO, TechFlow",
    text: "Hasilnya luar biasa! Website kami terlihat sangat profesional dan conversion rate meningkat 3x lipat setelah redesign.",
    stars: 5,
  },
  {
    name: "Sarah Wijaya",
    role: "Founder, Kreativa",
    text: "Prosesnya sangat smooth dan komunikatif. Mereka benar-benar memahami apa yang kami butuhkan dan deliver lebih dari ekspektasi.",
    stars: 5,
  },
  {
    name: "Budi Santoso",
    role: "Marketing Director, NutriFit",
    text: "Tim yang sangat responsif dan kreatif. Landing page yang mereka buat berhasil meningkatkan lead generation kami secara signifikan.",
    stars: 5,
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section id="testimoni" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background like hero */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <motion.div
        className="absolute top-[15%] right-[8%] w-52 h-52 rounded-full bg-neutral-100/50"
        animate={{ y: [0, -15, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[5%] w-40 h-40 rounded-full bg-neutral-50 border border-neutral-200"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`dot-t-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-neutral-300"
          style={{ top: `${25 + i * 25}%`, left: `${20 + i * 25}%` }}
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-neutral-400 mb-5 mx-auto"
          />
          <p className="text-neutral-400 text-[0.8125rem] mb-3 tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
            Testimoni
          </p>
          <h2 className="text-[1.75rem] md:text-[2.5rem] text-neutral-900 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, lineHeight: 1.15 }}>
            Apa kata klien kami
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 relative overflow-hidden border border-neutral-100 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-500 group"
            >
              {/* Large quote decoration */}
              <motion.div
                className="absolute -top-2 -right-2 text-neutral-100"
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                <Quote size={80} className="fill-current" />
              </motion.div>

              {/* Bottom line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.08 }}
                    >
                      <Star size={14} className="fill-neutral-900 text-neutral-900" />
                    </motion.div>
                  ))}
                </div>
                <p
                  className="text-neutral-600 mb-8 text-[0.9375rem]"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center text-[0.8125rem] text-white"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
                  >
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-neutral-900 text-[0.875rem]" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}>
                      {t.name}
                    </p>
                    <p className="text-neutral-400 text-[0.75rem]" style={{ fontFamily: "Inter, sans-serif" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
