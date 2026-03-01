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
                    className="prose prose-neutral prose-lg mx-auto text-neutral-600 text-[1rem] md:text-[1.125rem]"
                    style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
                >
                    <ul className="list-none space-y-4">
                        <li className="flex items-center gap-2 text-neutral-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Meningkatkan kepercayaan bisnis
                        </li>
                        <li className="flex items-center gap-2 text-neutral-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Lebih mudah ditemukan di Google
                        </li>
                        <li className="flex items-center gap-2 text-neutral-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Tampil profesional 24 jam
                        </li>
                        <li className="flex items-center gap-2 text-neutral-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Mendukung pertumbuhan jangka panjang
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
