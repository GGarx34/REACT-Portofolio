import React, { useState, useEffect } from 'react'; // Menambahkan useState dan useEffect
import Navbar from './components/Navbar';
import personImage from './assets/person.jpg';

// --- Komponen Ikon SVG (tidak berubah) ---
const HtmlIcon = () => (<svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const CssIcon = () => (<svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 7H7.5L8 12H16L15.5 17L12 18L8.5 17L8.25 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const JsIcon = () => (<svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 21L12 18L6.5 21L5 3H19L17.5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.5 8H14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.5 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.5 12H9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const ReactIcon = () => (<svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="currentColor" strokeWidth="2"/><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12" stroke="currentColor" strokeWidth="2" transform="rotate(60 12 12)"/><path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12" stroke="currentColor" strokeWidth="2" transform="rotate(120 12 12)"/></svg>);
const PythonIcon = () => (<svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 21.5L12 19L15 21.5L18.5 13L16.5 12L12 16L7.5 12L5.5 13L9 21.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3L16 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3L8 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const TailwindIcon = () => (<svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const GithubIcon = () => (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 19C9 21.2091 10.7909 23 13 23C15.2091 23 17 21.2091 17 19V18H9V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 18V10C9 7.79086 10.7909 6 13 6C15.2091 6 17 7.79086 17 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z" fill="currentColor"/><path d="M2 2L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const EmailIcon = () => (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>);
const ContactLink = ({ href, children }) => (<a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">{children}</a>);

function Home() {
    // State untuk link aktif sekarang dikelola di sini
    const [activeLink, setActiveLink] = useState('Home');

    const skills = [
        { name: "HTML5", icon: <HtmlIcon /> },
        { name: "CSS3", icon: <CssIcon /> },
        { name: "JavaScript", icon: <JsIcon /> },
        { name: "React", icon: <ReactIcon /> },
        { name: "Python", icon: <PythonIcon /> },
        { name: "Tailwind CSS", icon: <TailwindIcon /> }
    ];

    const certificates = [
        { name: "Sertifikasi Web Developer", issuer: "Dicoding Indonesia", year: "2023", image: "https://placehold.co/600x400/0f172a/38bdf8?text=Sertifikat+1" },
        { name: "React Front-End", issuer: "Hacktiv8", year: "2024", image: "https://placehold.co/600x400/0f172a/38bdf8?text=Sertifikat+2" },
        { name: "Dasar-Dasar UI/UX", issuer: "Skilvul", year: "2023", image: "https://placehold.co/600x400/0f172a/38bdf8?text=Sertifikat+3" }
    ];

    // useEffect untuk mendeteksi posisi scroll dan mengupdate link aktif
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        
        const handleScroll = () => {
            const scrollY = window.pageYOffset;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 150; // Offset agar link aktif lebih cepat
                let sectionId = current.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    const linkName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
                    setActiveLink(linkName);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            {/* Mengirim state dan fungsi update sebagai props ke Navbar */}
            <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
            <main className="scroll-smooth bg-slate-900">
                <section id='home' className="pt-24 md:pt-0">
                    <div className="flex flex-col-reverse md:flex-row justify-between md:h-screen">
                        <div id='left-hero' className="relative w-full md:w-2/3 flex items-center justify-center overflow-hidden bg-slate-900 py-16 md:py-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] bg-gradient-radial from-blue-900/30 via-slate-900 to-slate-900 rounded-full animate-spin-slow"></div>
                            <div className="relative z-10 flex flex-col items-center w-full text-center px-4">
                                <h1 className="mb-5 text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-400 text-transparent bg-clip-text">
                                    TEGAR BAGUS AFRIANTO
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl font-normal text-gray-300 mt-4 max-w-2xl">
                                    Saya adalah seorang Mahasiswa <span className="text-blue-400 font-semibold">Teknik Informatika</span> di <span className="text-blue-400 font-semibold">Institut Teknologi Indonesia</span> yang bersemangat dalam pengembangan web dan teknologi. Dengan fokus pada pembuatan aplikasi yang fungsional dan intuitif, saya selalu antusias untuk belajar hal-hal baru dan berkolaborasi dalam proyek-proyek yang menantang.
                                </p>
                                <a href="#skils" className="mt-10 px-6 py-3 sm:px-8 sm:py-4 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/40 transform hover:scale-105">
                                    Jelajahi Lebih Lanjut
                                </a>
                            </div>
                        </div>
                        <div id='right-hero' className="relative w-full md:w-1/3 h-96 md:h-full bg-cover bg-top md:bg-center" style={{ backgroundImage: `url(${personImage})` }}>
                            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
                            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                            <div className="md:hidden absolute inset-0 [background:radial-gradient(ellipse_at_center,_transparent_25%,_#0f172a)]"></div>
                        </div>
                    </div>
                </section>

                <section id="skils" className="min-h-screen w-full py-20 sm:py-24 px-4 md:px-8 flex flex-col items-center justify-center bg-slate-900 text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Keahlian Saya</h2>
                    <p className="text-gray-400 mb-12 text-center">Teknologi yang saya kuasai untuk membangun aplikasi web.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl w-full">
                        {skills.map((skill) => (
                            <div key={skill.name} className="bg-slate-800/50 backdrop-blur-sm border border-blue-800/50 rounded-lg p-4 sm:p-6 text-center flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:bg-slate-700/70 hover:-translate-y-2">
                                <div className="text-blue-400 mb-2 sm:mb-4">{skill.icon}</div>
                                <h3 className="font-semibold text-sm sm:text-lg">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="sertifikat" className="min-h-screen w-full py-20 sm:py-24 px-4 md:px-8 flex flex-col items-center justify-center bg-slate-900 text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Sertifikat & Pencapaian</h2>
                    <p className="text-gray-400 mb-12 text-center">Beberapa pengakuan atas kompetensi yang telah saya raih.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                        {certificates.map((cert) => (
                            <div key={cert.name} className="bg-slate-800/50 rounded-lg overflow-hidden border border-blue-800/50 group">
                                <img src={cert.image} alt={cert.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <h3 className="font-bold text-lg sm:text-xl mb-1">{cert.name}</h3>
                                    <p className="text-blue-400 font-semibold mb-2">{cert.issuer}</p>
                                    <p className="text-gray-400 text-sm">Diterbitkan: {cert.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="kontak" className="min-h-screen w-full py-20 sm:py-24 px-4 md:px-8 flex flex-col items-center justify-center text-center bg-slate-900 text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Hubungi Saya</h2>
                    <p className="text-gray-400 mb-8 max-w-xl">Saya terbuka untuk diskusi, kolaborasi, atau sekadar menyapa. Jangan ragu untuk menghubungi saya.</p>
                    <div className="bg-slate-800/50 border border-blue-800/50 rounded-lg p-6 sm:p-8 w-full max-w-lg">
                        <p className="text-base sm:text-lg text-gray-300 mb-2">Anda dapat menghubungi saya melalui email di:</p>
                        <a href="mailto:garxboss@gmail.com" className="text-xl sm:text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300 break-all">
                            garxboss@gmail.com
                        </a>
                        <div className="mt-8 pt-6 border-t border-slate-700">
                            <p className="text-gray-400 mb-4">Atau temukan saya di media sosial:</p>
                            <div className="flex justify-center items-center gap-x-8 text-3xl">
                                <ContactLink href="https://github.com/GGarx34">
                                    <GithubIcon />
                                </ContactLink>
                                <ContactLink href="mailto:garxboss@gmail.com">
                                    <EmailIcon />
                                </ContactLink>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;
