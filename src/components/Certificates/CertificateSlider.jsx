import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const certificates = [
    {
        id: 1,
        title: "FrontEnd Development",
        img: "/certificates/certificate1.png",
    },
    {
        id: 2,
        title: "Backend Development",
        img: "/certificates/certificate2.png",
    },
    {
        id: 3,
        title: "BookMyShow",
        img: "/certificates/certificate3.png",
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
        <div id="Certificates" className="max-w-3xl mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">My Certificates</h2>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <AnimatePresence mode="wait">
                    <motion.img
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
                        className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                    >
                        <ChevronLeft />
                    </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2">
                    <button
                        onClick={nextSlide}
                        className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <p className="text-center mt-4 text-lg font-medium text-white">
                {certificates[index].title}
            </p>
        </div>
    );
};

export default CertificateSlider;
