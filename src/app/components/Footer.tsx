import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Layanan: ["Website", "Landing Page", "UI/UX Design", "Web App", "SEO"],
  Perusahaan: ["Tentang Kami", "Portfolio", "Proses", "Karir"],
  Bantuan: ["FAQ", "Kontak", "Syarat & Ketentuan", "Kebijakan Privasi"],
};

const socials = ["Instagram", "Twitter", "Dribbble", "LinkedIn"];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-8 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />
      <motion.div
        className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-white/[0.01]"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="text-[1.5rem] tracking-tight inline-block mb-4" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}>
              bangbisnis<span className="text-neutral-500">.</span>
            </a>
            <p className="text-neutral-500 text-[0.875rem] max-w-xs mb-6" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
              Bang Bisnis kreatif yang fokus membuat website \u0026 landing page modern untuk meningkatkan konversi bisnis Anda.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-[0.6875rem]"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
                >
                  {s[0]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-[0.875rem] mb-5" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-500 hover:text-white text-[0.8125rem] transition-colors inline-flex items-center gap-1 group"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-[0.75rem]" style={{ fontFamily: "Inter, sans-serif" }}>
            &copy; 2026 bangbisnis. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neutral-500 animate-pulse" />
            <span className="text-neutral-500 text-[0.75rem]" style={{ fontFamily: "Inter, sans-serif" }}>
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
