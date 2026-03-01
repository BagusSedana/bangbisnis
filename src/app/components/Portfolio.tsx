import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "TechFlow SaaS",
    category: "Landing Page",
    tags: ["React", "Tailwind"],
    image: "https://images.unsplash.com/photo-1580670290771-1d00d819d78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZXJuJTIwd2Vic2l0ZSUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzIzNTkwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "large",
  },
  {
    title: "Kreativa Bang Bisnis",
    category: "Company Profile",
    tags: ["Next.js", "CMS"],
    image: "https://images.unsplash.com/photo-1768561327952-119a4c9c76f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFyayUyMHRlY2glMjBwcm9kdWN0JTIwZGVzaWdufGVufDF8fHx8MTc3MjM1OTA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "small",
  },
  {
    title: "NutriFit App",
    category: "Web Application",
    tags: ["React", "Node.js"],
    image: "https://images.unsplash.com/photo-1649346716613-d92f359d0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBnZW9tZXRyaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyMzU5MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "small",
  },
  {
    title: "Skyward Analytics",
    category: "Dashboard",
    tags: ["TypeScript", "API"],
    image: "https://images.unsplash.com/photo-1760462787657-35f4897aa136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMG1vZGVybiUyMGRhcmslMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NzIzNTkwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "large",
  },
];

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className={`group cursor-pointer relative rounded-2xl overflow-hidden ${project.size === "large" ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
        }`}
    >
      <ImageWithFallback
        src={project.image.replace("q=80&w=1080", "q=75&w=800&auto=format,compress")}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
      />

      {/* Always visible gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover full overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-all duration-500" />

      {/* Corner arrow */}
      <motion.div
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/0 backdrop-blur-sm border border-white/0 group-hover:bg-white/10 group-hover:border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
      >
        <ArrowUpRight size={18} className="text-white" />
      </motion.div>

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        {/* Tags */}
        <div className="flex gap-2 mb-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.6875rem] px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 border border-white/10"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <h3
              className="text-white text-[1.25rem] md:text-[1.5rem] mb-1 group-hover:translate-x-2 transition-transform duration-500"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
            >
              {project.title}
            </h3>
            <p
              className="text-white/50 text-[0.8125rem] group-hover:text-white/70 transition-colors group-hover:translate-x-2 duration-500 delay-75"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {project.category}
            </p>
          </div>

          {/* View project line */}
          <div className="hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-200">
            <span className="text-white/60 text-[0.75rem]" style={{ fontFamily: "Inter, sans-serif" }}>View</span>
            <motion.div className="w-8 h-px bg-white/40" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const { ref, isInView } = useInView();

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-neutral-950 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />
      <motion.div
        className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-white/[0.015]"
        animate={{ y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[8%] w-48 h-48 rounded-full border border-white/5"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
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
              className="h-px bg-neutral-500 mb-5"
            />
            <p className="text-neutral-500 text-[0.8125rem] mb-3 tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
              Portfolio
            </p>
            <h2
              className="text-[1.75rem] md:text-[2.5rem] text-white tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, lineHeight: 1.15 }}
            >
              Karya terbaru
              <br />
              <span className="text-neutral-500">yang kami banggakan</span>
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="text-neutral-400 hover:text-white transition-colors text-[0.875rem] flex items-center gap-3 group"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span>Lihat semua project</span>
            <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-neutral-900 transition-all duration-300">
              <ArrowUpRight size={14} />
            </div>
          </motion.a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {/* Row 1: large + small */}
          <div className="md:col-span-2">
            <ProjectCard project={projects[0]} index={0} isInView={isInView} />
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <ProjectCard project={projects[1]} index={1} isInView={isInView} />
            <ProjectCard project={projects[2]} index={2} isInView={isInView} />
          </div>
        </div>

        {/* Row 2: full width */}
        <div className="mt-4">
          <ProjectCard project={projects[3]} index={3} isInView={isInView} />
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 py-6 border-t border-white/5"
        >
          {["4.9 Rating", "100% On Time", "3x Avg. Conversion"].map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-neutral-500"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              />
              <span className="text-neutral-500 text-[0.8125rem]" style={{ fontFamily: "Inter, sans-serif" }}>
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
