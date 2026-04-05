import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const certificates = [
    {
        id: 1,
        title: "Full Stack Web Development — IIT Guwahati",
        img: "/images/ShraddhaTripathi.jpg",
    },
    {
        id: 2,
        title: "FrontEnd Development",
        img: "/certificates/certificate1.png",
    },
    {
        id: 3,
        title: "Backend Development",
        img: "/certificates/certificate2.png",
    },
    {
        id: 4,
        title: "BookMyShow",
        img: "/certificates/certificate3.png",
    },
    {
        id: 5,
        title: "DSA Module",
        img: "/certificates/DSA_module2.png",
    },
];

const CertificateSlider = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % certificates.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    return (
        <section
            id="Certificates"
            className="w-full bg-aboutBg border-y border-primaryBg/10 py-12 md:py-16"
        >
        <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h2 className="section-title text-center mb-6 !text-primaryBg">My Certificates</h2>
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-md">
                <AnimatePresence mode="wait">
                    <Motion.img
                        key={certificates[index].id}
                        src={certificates[index].img}
                        alt={certificates[index].title}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full object-contain h-[400px]"
                    />
                </AnimatePresence>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2">
                    <button
                        onClick={prevSlide}
                        className="bg-btn text-primaryBg p-2 rounded-full shadow hover:opacity-90"
                    >
                        <ChevronLeft />
                    </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2">
                    <button
                        onClick={nextSlide}
                        className="bg-btn text-primaryBg p-2 rounded-full shadow hover:opacity-90"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <p className="text-center mt-4 text-[18px] md:text-[22px] font-semibold text-primaryBg tech-mono">
                {certificates[index].title}
            </p>
        </div>
        </section>
    );
};

export default CertificateSlider;
