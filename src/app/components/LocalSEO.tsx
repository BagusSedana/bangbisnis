import { motion } from "motion/react";

export function LocalSEO() {
    return (
        <section className="py-24 px-6 bg-neutral-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-[2rem] md:text-[2.5rem] tracking-tight text-neutral-900 mb-6 font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif", lineHeight: 1.2 }}>
                        Mengapa Bisnis di Bali Membutuhkan Website Profesional?
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Tingkatkan Kepercayaan",
                                desc: "Meningkatkan kredibilitas bisnis di mata pelanggan potensial dengan profil digital yang meyakinkan.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                )
                            },
                            {
                                title: "Mudah Ditemukan",
                                desc: "Hadir di halaman pertama pencarian Google saat audiens mencari layanan bisnis Anda di Bali.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                )
                            },
                            {
                                title: "Profesional 24 Jam",
                                desc: "Menjadi etalase digital yang elegan dan siap menampilkan portofolio serta melayani klien Anda setiap saat.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                )
                            },
                            {
                                title: "Pertumbuhan Jangka Panjang",
                                desc: "Investasi digital berkelanjutan yang mendatangkan prospek berkualitas secara otomatis dari waktu ke waktu.",
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                )
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group relative bg-white border border-neutral-200 p-8 rounded-3xl hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                            >
                                {/* Decorative background glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10" />

                                <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neutral-900 transition-colors duration-300">
                                    <svg className="w-7 h-7 text-neutral-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {item.icon}
                                    </svg>
                                </div>

                                <h3 className="text-[1.25rem] text-neutral-900 font-semibold mb-3 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                                    {item.title}
                                </h3>

                                <p className="text-neutral-500 leading-relaxed text-[0.9375rem]" style={{ fontFamily: "Inter, sans-serif" }}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
