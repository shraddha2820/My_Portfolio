import TextChange from '../../TextChange'
import { motion as Motion } from "motion/react";
import { Link } from "react-scroll";
import Navbar from "../Navbar/Navbar";


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, delay },
    }
});

const Home = () => {
    return (
        <div id="Home" className="w-full bg-primaryBg">
            <section className="relative w-full overflow-hidden border-b border-white/10 bg-[#060b08]">
                <div className="pointer-events-none absolute inset-0 opacity-55 bg-[radial-gradient(circle_at_18%_12%,rgba(34,197,94,0.45),transparent_32%),radial-gradient(circle_at_84%_18%,rgba(163,230,53,0.28),transparent_30%),linear-gradient(90deg,rgba(34,197,94,0.12),transparent_18%,transparent_82%,rgba(34,197,94,0.12))]" />

                <Navbar onHero />

                <div className="relative z-20 px-6 md:px-12 lg:px-14 pt-8 md:pt-12 lg:pt-14 pb-8 md:pb-9">
                    <Motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="hero-title m-0 mb-0 text-[52px] md:text-[88px] lg:text-[104px] leading-[0.88] max-w-5xl text-[#F4F9E9]"
                    >
                        <TextChange />
                    </Motion.h1>

                    <div className="-mt-1 md:-mt-2 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-5 md:gap-7">
                        <Motion.span
                            variants={container(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="font-[serif] italic text-[44px] md:text-[76px] lg:text-[84px] leading-[0.95] text-[#EEF5D9]"
                        >
                            Full Stack <span className="text-highlight">Developer</span>
                        </Motion.span>

                        <Motion.p
                            variants={container(0.8)}
                            initial="hidden"
                            animate="visible"
                            className="body-text max-w-[420px] text-[15px] md:text-[16px] md:leading-[1.6] text-white"
                        >
                            Full Stack Developer experienced in building scalable, high-performance web applications. I specialize in developing responsive frontends with React, designing efficient backend systems using Node.js and Express, and managing data with MongoDB.
                            I aim to deliver clean, intuitive, and reliable user experiences through well-structured and maintainable code.
                        </Motion.p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-7">
                        <Link to="Contact" smooth={true} duration={800} offset={-50}>
                            <Motion.button
                                variants={container(1.2)}
                                initial="hidden"
                                animate="visible"
                                className="text-primaryBg py-2 px-6 text-[14px] md:text-[16px] hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-full bg-[#EEF5D9]"
                            >
                                Contact Me
                            </Motion.button>
                        </Link>
                        <Motion.a
                            href="/Shraddha_Tripathi_2026_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={container(1.4)}
                            initial="hidden"
                            animate="visible"
                        >
                            <button className="text-primaryBg py-2 px-6 text-[14px] md:text-[16px] hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-full bg-btn">
                                Resume
                            </button>
                        </Motion.a>
                    </div>
                </div>

                <Motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="relative z-20 w-full pb-6 md:pb-8"
                >
                    <img
                        className="block max-h-[min(50vh,960px)] w-full object-contain grayscale"
                        src="/images/shraddha.jpg"
                        alt="Shraddha"
                    />
                </Motion.div>
            </section>
        </div>
    );
};

export default Home;

