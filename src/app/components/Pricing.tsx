import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useState } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "800",
    unit: "Ribu",
    desc: "Solusi cepat & tepat untuk bisnis yang baru mulai.",
    features: [
      "1 Halaman Landing Page",
      "Responsive Design",
      "Formulir Kontak",
      "SEO Dasar",
      "Revisi 2x",
      "Selesai 3-5 Hari",
    ],
    timeline: "3-5 Hari",
  },
  {
    name: "Growth",
    price: "1.5",
    unit: "Juta",
    desc: "Untuk bisnis yang siap berkembang lebih cepat.",
    features: [
      "Website 5 Halaman",
      "Custom Design Premium",
      "Responsive + Animasi",
      "SEO Optimization",
      "CMS Integration",
      "Revisi 5x",
      "Selesai 7-10 Hari",
      "Support 1 Bulan",
    ],
    timeline: "7-10 Hari",
  },
  {
    name: "Pro",
    price: "Custom",
    unit: "",
    desc: "Solusi enterprise dengan fitur terlengkap.",
    features: [
      "Website Unlimited Pages",
      "Custom Design & Development",
      "Advanced Animations",
      "Full SEO Strategy",
      "E-commerce / Dashboard",
      "Revisi Unlimited",
      "Selesai 3-4 Minggu",
      "Support 3 Bulan",
    ],
    timeline: "3-4 Minggu",
  },
];

export function Pricing() {
  const { ref, isInView } = useInView();
  const [active, setActive] = useState(1);

  const plan = plans[active];

  return (
    <section id="harga" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <motion.div
        className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-neutral-100/40"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[5%] w-40 h-40 rounded-full bg-neutral-50 border border-neutral-200"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-neutral-400 mb-5 mx-auto"
          />
          <p className="text-neutral-400 text-[0.8125rem] mb-3 tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
            Harga
          </p>
          <h2 className="text-[1.75rem] md:text-[2.5rem] text-neutral-900 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, lineHeight: 1.15 }}>
            Investasi untuk bisnis Anda
          </h2>
        </motion.div>

        {/* Plan Selector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-neutral-100 rounded-full p-1 border border-neutral-200">
            {plans.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={`px-6 md:px-8 py-2.5 rounded-full text-[0.875rem] transition-all duration-300 relative ${active === i
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-900"
                  }`}
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                {active === i && (
                  <motion.div
                    layoutId="pricing-tab"
                    className="absolute inset-0 bg-neutral-900 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{p.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-900 rounded-3xl overflow-hidden relative"
        >
          {/* Inner background */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }} />
          <motion.div
            className="absolute top-10 right-10 w-48 h-48 rounded-full border border-white/5"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="grid md:grid-cols-2 relative z-10">
            {/* Left: Price */}
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
                  <span className="text-neutral-400 text-[0.75rem]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {plan.timeline}
                  </span>
                </div>

                <h3
                  className="text-white text-[1.5rem] mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
                >
                  {plan.name}
                </h3>
                <p className="text-neutral-500 text-[0.875rem] mb-8" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
                  {plan.desc}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mt-1">
                    {plan.price !== "Custom" && (
                      <span className="text-white text-[0.9375rem]" style={{ fontFamily: "Inter, sans-serif" }}>Rp</span>
                    )}
                    <span
                      className="text-white text-[4rem] md:text-[4.5rem]"
                      style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, lineHeight: 1 }}
                    >
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="text-neutral-500 text-[1.25rem]" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 500 }}>
                        {plan.unit}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <motion.a
                href="#kontak"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full text-[0.9375rem] hover:shadow-lg hover:shadow-white/10 transition-all w-full md:w-auto"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                Mulai Project
                <ArrowRight size={16} />
              </motion.a>
            </div>

            {/* Right: Features */}
            <div className="p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/5">
              <p className="text-neutral-500 text-[0.75rem] tracking-widest uppercase mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Yang didapat
              </p>
              <ul className="space-y-4">
                {plan.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: fi * 0.06 }}
                    className="flex items-center gap-3 text-[0.9375rem]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-neutral-300">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Navigation arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-3 mt-8"
        >
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-400 hover:text-neutral-900 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex items-center gap-2">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${active === i ? "w-8 h-2 bg-neutral-900" : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActive(Math.min(plans.length - 1, active + 1))}
            disabled={active === plans.length - 1}
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-400 hover:text-neutral-900 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
