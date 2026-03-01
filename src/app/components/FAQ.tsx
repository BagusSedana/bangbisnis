import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { MessageCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Berapa lama waktu pengerjaan website?",
    a: "Tergantung kompleksitas project. Landing page biasanya 5-7 hari kerja, website company profile 10-14 hari, dan project custom bisa 3-4 minggu.",
  },
  {
    q: "Apakah saya bisa request revisi?",
    a: "Tentu! Setiap paket sudah termasuk revisi. Kami berkomitmen untuk memastikan hasilnya sesuai dengan ekspektasi Anda.",
  },
  {
    q: "Teknologi apa yang digunakan?",
    a: "Kami menggunakan React, Next.js, Tailwind CSS, dan platform lain sesuai kebutuhan. Untuk CMS, kami support WordPress, Sanity, atau custom.",
  },
  {
    q: "Apakah sudah termasuk hosting dan domain?",
    a: "Biaya hosting dan domain terpisah. Namun kami akan bantu setup dan rekomendasi provider terbaik sesuai budget Anda.",
  },
  {
    q: "Bagaimana proses pembayaran?",
    a: "50% DP di awal, 50% setelah selesai. Kami menerima transfer bank dan e-wallet.",
  },
  {
    q: "Ada garansi setelah website selesai?",
    a: "Ya! Setiap project mendapat garansi support gratis. Durasi tergantung paket yang dipilih.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <motion.div
        className="absolute top-[20%] right-[8%] w-56 h-56 rounded-full bg-neutral-100/40"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[5%] w-36 h-36 rounded-full bg-neutral-50 border border-neutral-200"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-neutral-400 mb-5"
          />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-neutral-400 text-[0.8125rem] mb-3 tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
                FAQ
              </p>
              <h2
                className="text-[1.75rem] md:text-[2.5rem] text-neutral-900 tracking-tight"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, lineHeight: 1.15 }}
              >
                Ada pertanyaan?
                <br />
                <span className="text-neutral-400">Kami punya jawabannya</span>
              </h2>
            </div>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 text-[0.875rem] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <MessageCircle size={16} />
              Masih bingung? Chat kami
            </a>
          </div>
        </motion.div>

        {/* Chat-style FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Question - right aligned like user message */}
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex justify-end mb-2 group"
              >
                <div className={`max-w-[85%] md:max-w-[70%] text-right px-5 py-3.5 rounded-2xl rounded-br-sm transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}>
                  <span className="text-[0.9375rem]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                    {faq.q}
                  </span>
                </div>
              </button>

              {/* Answer - left aligned like bot response */}
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-start"
                  >
                    <div className="flex gap-3 max-w-[85%] md:max-w-[75%]">
                      <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white text-[0.625rem]" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}>s.</span>
                      </div>
                      <div className="bg-white border border-neutral-200 px-5 py-3.5 rounded-2xl rounded-bl-sm shadow-sm">
                        <p className="text-neutral-600 text-[0.875rem]" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full text-[0.875rem] hover:bg-neutral-800 transition-all group"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            <MessageCircle size={16} />
            Tanya langsung via WhatsApp
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
