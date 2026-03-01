import { useEffect } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// We extract a simplified list of services data to mock the individual pages
const serviceData: Record<string, { title: string; subtitle: string; description: string; features: string[] }> = {
    "website-company-profile": {
        title: "Website Company Profile",
        subtitle: "Representasi Digital Profesional",
        description: "Bangun kredibilitas bisnis Anda dengan website company profile yang didesain secara elegan. Kami memastikan brand Anda terlihat meyakinkan bagi calon klien, investor, dan prospek di Bali.",
        features: ["Desain Kustom Elegan", "Halaman Portfolio Singkat", "Integrasi Form Kontak", "Mobile Responsive"],
    },
    "landing-page": {
        title: "Landing Page",
        subtitle: "Konversi Tinggi untuk Campaign",
        description: "Tingkatkan penjualan produk atau penawaran spesifik Anda dengan landing page yang difokuskan pada konversi. Desain langsung pada tujuan untuk mengubah pengunjung menjadi leads.",
        features: ["Copywriting Menarik", "Call-to-Action Strategis", "Loading Super Cepat", "Optimasi Konversi (CRO)"],
    },
    "ui-ux-design": {
        title: "UI/UX Design",
        subtitle: "Desain Antarmuka Modern",
        description: "Pengalaman pengguna yang luar biasa berawal dari desain yang intuitif. Kami meriset audiens Anda dan merancang antarmuka berbasis data yang memukau dan fungsional.",
        features: ["Wireframing & Prototyping", "User Flow Analysis", "Visual Design System", "Interactive Mockups"],
    },
    "responsive-design": {
        title: "Responsive Design",
        subtitle: "Tampil Sempurna di Semua Layar",
        description: "Dengan mayoritas traffic berasal dari mobile, kami memastikan setiap website yang kami bangun dapat beradaptasi secara dinamis di smartphone, tablet, maupun layar desktop.",
        features: ["Mobile-First Approach", "Fluid Grid Layouts", "Flexible Typography", "Cross-Browser Testing"],
    },
    "seo-optimization": {
        title: "SEO Optimization",
        subtitle: "Dominasi Mesin Pencari",
        description: "Jangan biarkan kompetitor Anda mengambil pangsa pasar di Google. Kami melakukan optimasi mendalam pada aspek teknis website Anda agar mudah di-crawl dan mendapat peringkat atas.",
        features: ["Technical SEO Audit", "Optimasi Kecepatan Ekstra", "Meta Tags & Schema", "Mobile Responsiveness SEO"],
    },
    "web-development": {
        title: "Web Development",
        subtitle: "Performa & Keamanan Maksimal",
        description: "Teknologi modern untuk menghasilkan website yang bukan hanya cantik, tapi juga kokoh. Kami menggunakan modern stack untuk jaminan performa dan skalabilitas tinggi.",
        features: ["Modern Tech Stack (React/Next)", "Clean Code Architecture", "Integrasi API", "Keamanan Tingkat Lanjut"],
    }
};

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = serviceData[slug as string];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen bg-white flex flex-col pt-32 px-6">
                <Navbar />
                <div className="max-w-4xl mx-auto text-center py-24">
                    <h1 className="text-4xl font-bold mb-6 text-neutral-900">Layanan Tidak Ditemukan</h1>
                    <Link to="/" className="text-neutral-500 underline hover:text-neutral-900 transition-colors">
                        Kembali ke Beranda
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
            <Navbar />

            <main className="pt-40 pb-24 px-6 relative overflow-hidden">
                {/* Background Grids */}
                <div className="absolute inset-0 opacity-[0.03] top-0 h-[60vh] -z-10" style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />

                <div className="max-w-4xl mx-auto mt-8 relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-neutral-500 mb-12 hover:text-neutral-900 transition-colors font-medium border border-neutral-200 px-5 py-2.5 rounded-full text-sm bg-white"
                    >
                        <ArrowLeft size={16} />
                        Kembali ke Layanan
                    </Link>

                    <p className="text-neutral-400 font-medium tracking-widest uppercase mb-4 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                        Detail Layanan
                    </p>
                    <h1 className="text-[2.5rem] md:text-[4rem] text-neutral-900 tracking-tight leading-[1.1] mb-6" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}>
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mb-16 leading-relaxed">
                        {service.subtitle}
                    </p>

                    <div className="w-full h-px bg-neutral-200 mb-16" />

                    <div className="grid md:grid-cols-[2fr_1fr] gap-12 lg:gap-24 mb-24">
                        <div>
                            <h2 className="text-2xl font-semibold text-neutral-900 mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                                Tentang Layanan Ini
                            </h2>
                            <p className="text-neutral-600 text-[1.0625rem] leading-loose mb-8">
                                {service.description}
                            </p>
                            <div className="bg-neutral-50 border border-neutral-100 p-8 rounded-3xl mt-12">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Siap mendiskusikan kebutuhan {service.title} Anda?</h3>
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-neutral-900 text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors"
                                >
                                    Mulai Konsultasi
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[0.875rem] font-semibold text-neutral-900 uppercase tracking-widest mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                                Fitur Utama
                            </h3>
                            <ul className="space-y-4">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-600">
                                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
