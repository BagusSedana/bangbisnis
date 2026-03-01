import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

export function CTA() {
  const { ref, isInView } = useInView();

  return (
    <section id="kontak" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background like hero */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <motion.div
        className="absolute top-[20%] left-[10%] w-48 h-48 rounded-full bg-neutral-100/40"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Inner decorations - same style as hero floating circles */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
          <motion.div
            className="absolute top-10 left-10 w-40 h-40 rounded-full border border-white/5"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-white/[0.015]"
            animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border border-white/5"
            animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`cta-dot-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white/15"
              style={{ top: `${20 + i * 18}%`, left: `${15 + i * 20}%` }}
              animate={{ y: [0, -12, 0], opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            />
          ))}

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8"
            >
              <MessageCircle size={28} className="text-neutral-400" />
            </motion.div>

            <h2
              className="text-white text-[1.75rem] md:text-[3rem] tracking-tight mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, lineHeight: 1.1 }}
            >
              Siap untuk memulai
              <br />
              <span className="text-neutral-500">project Anda?</span>
            </h2>
            <p className="text-neutral-500 max-w-md mx-auto mb-10 text-[0.9375rem]" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
              Konsultasikan kebutuhan website Anda secara gratis.
              Kami siap membantu mewujudkan visi digital Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full text-[0.9375rem] hover:shadow-lg hover:shadow-white/10 transition-all"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                Hubungi via WhatsApp
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="mailto:hello@studio.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 text-neutral-400 border border-white/10 px-8 py-4 rounded-full text-[0.9375rem] hover:bg-white/5 hover:text-white transition-all"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                <Mail size={18} />
                Kirim Email
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
