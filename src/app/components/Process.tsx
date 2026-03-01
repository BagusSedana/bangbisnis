import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useState } from "react";
import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Kami memahami bisnis, target audiens, dan tujuan Anda melalui sesi konsultasi mendalam. Kami menggali setiap detail untuk membangun fondasi project yang kuat.",
    detail: "Riset mendalam, analisis kompetitor, dan strategi yang tepat sasaran.",
    icon: Search,
    duration: "2-3 Hari",
  },
  {
    num: "02",
    title: "Design",
    desc: "Merancang wireframe dan visual design yang sesuai dengan brand identity Anda. Setiap elemen visual dipilih dengan cermat.",
    detail: "Wireframe, mockup, prototype interaktif, dan iterasi design.",
    icon: PenTool,
    duration: "3-5 Hari",
  },
  {
    num: "03",
    title: "Development",
    desc: "Membangun website dengan teknologi modern, performa tinggi, dan SEO-friendly. Kode yang clean dan maintainable.",
    detail: "Pixel-perfect coding, responsive, dan optimasi performa.",
    icon: Code2,
    duration: "5-10 Hari",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Testing menyeluruh, deploy, dan support pasca-launch untuk memastikan semuanya berjalan sempurna.",
    detail: "QA testing, deployment, monitoring, dan support berkelanjutan.",
    icon: Rocket,
    duration: "1-2 Hari",
  },
];

export function Process() {
  const { ref, isInView } = useInView();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="proses" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <motion.div
        className="absolute top-[15%] right-[5%] w-64 h-64 rounded-full bg-neutral-100/40"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[3%] w-40 h-40 rounded-full bg-neutral-50 border border-neutral-200"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
          <p className="text-neutral-400 text-[0.8125rem] mb-3 tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
            Proses Kerja
          </p>
          <h2
            className="text-[1.75rem] md:text-[2.5rem] text-neutral-900 tracking-tight max-w-lg"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, lineHeight: 1.15 }}
          >
            Dari ide menjadi
            <br />
            <span className="text-neutral-400">kenyataan</span>
          </h2>
        </motion.div>

        {/* Interactive Process - Left tabs + Right content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Step selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-2"
          >
            {steps.map((step, i) => (
              <motion.button
                key={step.num}
                onClick={() => setActiveStep(i)}
                whileHover={{ x: 6 }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 group relative overflow-hidden ${
                  activeStep === i
                    ? "bg-neutral-900 border-neutral-800"
                    : "bg-white border-neutral-100 hover:border-neutral-300"
                }`}
              >
                {/* Progress bar */}
                {activeStep === i && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white/30"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    key={`progress-${i}`}
                    onAnimationComplete={() => setActiveStep((i + 1) % steps.length)}
                  />
                )}

                <div className="flex items-center gap-4">
                  <span
                    className={`text-[1.75rem] transition-colors ${
                      activeStep === i ? "text-white" : "text-neutral-200"
                    }`}
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}
                  >
                    {step.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`text-[1.0625rem] transition-colors ${
                        activeStep === i ? "text-white" : "text-neutral-900"
                      }`}
                      style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-[0.75rem] transition-colors ${
                        activeStep === i ? "text-neutral-400" : "text-neutral-400"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {step.duration}
                    </p>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    activeStep === i
                      ? "bg-white/10 text-white"
                      : "bg-neutral-100 text-neutral-400 group-hover:bg-neutral-200"
                  }`}>
                    <step.icon size={16} />
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Active step detail */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center"
          >
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-100 relative overflow-hidden w-full"
            >
              {/* Large bg number */}
              <div
                className="absolute -top-6 -right-4 text-[10rem] text-neutral-100 select-none pointer-events-none"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, lineHeight: 1 }}
              >
                {steps[activeStep].num}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 mb-6">
                  {(() => { const Icon = steps[activeStep].icon; return <Icon size={26} />; })()}
                </div>

                <h3
                  className="text-neutral-900 text-[1.5rem] md:text-[1.75rem] mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
                >
                  {steps[activeStep].title}
                </h3>
                <p
                  className="text-neutral-500 text-[0.9375rem] mb-6"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
                >
                  {steps[activeStep].desc}
                </p>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-100">
                  <div className="w-2 h-2 rounded-full bg-neutral-300" />
                  <p className="text-neutral-500 text-[0.8125rem]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {steps[activeStep].detail}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-neutral-400">
                  <span className="text-[0.8125rem]" style={{ fontFamily: "Inter, sans-serif" }}>
                    Estimasi: {steps[activeStep].duration}
                  </span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
