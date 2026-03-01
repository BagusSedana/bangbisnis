import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Globe, Palette, Zap, BarChart3, Smartphone, Code2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Company Profile",
    desc: "Website profesional yang merepresentasikan brand & bisnis Anda secara digital.",
    num: "01",
  },
  {
    icon: Zap,
    title: "Landing Page",
    desc: "Halaman konversi tinggi yang dirancang untuk mengubah pengunjung menjadi pelanggan.",
    num: "02",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Desain antarmuka yang intuitif, modern, dan fokus pada pengalaman pengguna.",
    num: "03",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Tampilan sempurna di semua perangkat, dari desktop hingga smartphone.",
    num: "04",
  },
  {
    icon: BarChart3,
    title: "SEO Optimization",
    desc: "Optimasi mesin pencari agar website Anda mudah ditemukan di Google.",
    num: "05",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Pengembangan website dengan teknologi terkini untuk performa maksimal.",
    num: "06",
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="layanan" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background - matching hero grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      {/* Floating circles like hero */}
      <motion.div
        className="absolute top-20 right-[5%] w-64 h-64 rounded-full bg-neutral-100/60"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-[5%] w-44 h-44 rounded-full bg-neutral-50 border border-neutral-200"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`dot-s-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-neutral-300"
          style={{ top: `${20 + i * 18}%`, left: `${12 + i * 22}%` }}
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-neutral-400 mb-5"
            />
            <p
              className="text-neutral-400 text-[0.8125rem] mb-3 tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Layanan
            </p>
            <h2
              className="text-[1.75rem] md:text-[2.5rem] text-neutral-900 tracking-tight max-w-md"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, lineHeight: 1.15 }}
            >
              Layanan Website untuk Bisnis di Bali
            </h2>
          </div>
          <p
            className="text-neutral-500 max-w-sm text-[0.9375rem]"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
          >
            Kami menyediakan layanan lengkap dari design hingga development untuk transformasi digital bisnis Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-7 rounded-2xl bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-500 cursor-default relative overflow-hidden"
            >
              {/* Animated line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:border-neutral-900 group-hover:text-white transition-all duration-400">
                    <s.icon size={22} />
                  </div>
                  <span
                    className="text-neutral-200 text-[0.75rem] group-hover:text-neutral-400 transition-colors"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3
                  className="text-neutral-900 mb-2 text-[1.0625rem]"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-neutral-500 text-[0.875rem] mb-4"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
                >
                  {s.desc}
                </p>
                <div className="flex items-center gap-1 text-neutral-300 group-hover:text-neutral-900 transition-colors duration-300">
                  <span className="text-[0.8125rem]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                    Pelajari
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
