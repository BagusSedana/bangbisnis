import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Clock, Shield, HeartHandshake, TrendingUp, Star } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Desain Premium",
    desc: "Setiap pixel dirancang dengan teliti untuk menciptakan pengalaman visual yang memukau.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    desc: "Kami berkomitmen menyelesaikan setiap project sesuai timeline yang disepakati.",
  },
  {
    icon: Shield,
    title: "Kode Berkualitas",
    desc: "Clean code, performa tinggi, dan best practices untuk website yang tahan lama.",
  },
  {
    icon: HeartHandshake,
    title: "Support Terbaik",
    desc: "Komunikasi responsif dan support berkelanjutan setelah website Anda live.",
  },
];

export function WhyUs() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background like hero */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <motion.div
        className="absolute top-[20%] right-[5%] w-56 h-56 rounded-full bg-neutral-100/50"
        animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[3%] w-36 h-36 rounded-full bg-neutral-50 border border-neutral-200"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-neutral-900/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762784574847-16c5100cd1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JraW5nJTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc3MjM1Nzk0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge - Projects */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-2xl shadow-xl shadow-neutral-900/10 p-4 border border-neutral-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                  <TrendingUp size={18} className="text-neutral-600" />
                </div>
                <div>
                  <p className="text-neutral-900 text-[0.8125rem]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                    50+ Project
                  </p>
                  <p className="text-neutral-400 text-[0.6875rem]" style={{ fontFamily: "Inter, sans-serif" }}>
                    Berhasil diselesaikan
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge top-left - Rating */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -left-4 md:left-8 bg-white rounded-2xl shadow-xl shadow-neutral-900/10 px-4 py-3 border border-neutral-100"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={12} className="fill-neutral-900 text-neutral-900" />
                  ))}
                </div>
                <span className="text-[0.75rem] text-neutral-600" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  4.9/5
                </span>
              </div>
            </motion.div>

            {/* Decorative circles */}
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-neutral-200"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full border border-neutral-100"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-neutral-400 mb-5"
            />
            <p className="text-neutral-400 text-[0.8125rem] mb-3 tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
              Kenapa Kami
            </p>
            <h2
              className="text-[1.75rem] md:text-[2.5rem] text-neutral-900 tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, lineHeight: 1.15 }}
            >
              Bukan sekadar buat website, tapi solusi digital
            </h2>
            <p className="text-neutral-500 mb-10 text-[0.9375rem]" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
              Kami menggabungkan kreativitas dan teknologi untuk memberikan hasil terbaik bagi bisnis Anda.
            </p>

            <div className="space-y-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  whileHover={{ x: 6 }}
                  className="flex gap-4 group p-4 rounded-xl hover:bg-neutral-50 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 shrink-0 group-hover:bg-neutral-900 group-hover:border-neutral-900 group-hover:text-white transition-all duration-300">
                    <r.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-neutral-900 mb-1 text-[0.9375rem]" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}>
                      {r.title}
                    </h3>
                    <p className="text-neutral-500 text-[0.8125rem]" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
