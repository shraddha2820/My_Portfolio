import img from "../../assets/my_img.jpeg"
import TextChange from '../../TextChange'
import { motion } from "motion/react";
import { Link } from "react-scroll";


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
        <div
            id="Home"
            className="text-white flex flex-col-reverse md:flex-row items-center justify-between gap-10 p-8 md:p-20"
        >
            {/* Left Section */}
            <div className="w-full md:w-2/4 text-center md:text-left">
                <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl md:text-4xl font-extrabold leading-tight
                    bg-gradient-to-r from-purple-500 via-slate-500 to-pink-400
                    bg-clip-text text-transparent tracking-tight"
                >
                    <TextChange />
                </motion.h1>

                <motion.span
                    variants={container(0.4)}
                    initial="hidden"
                    animate="visible"
                    className="block text-2xl md:text-3xl font-semibold mt-2
                    bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                    bg-clip-text text-transparent"
                >
                    Full Stack Developer
                </motion.span>

                <motion.p
                    variants={container(0.8)}
                    initial="hidden"
                    animate="visible"
                    className="text-sm md:text-lg text-gray-300 mt-4 leading-relaxed"
                >
                    I'm a passionate Full Stack Developer with hands-on experience in designing, building, and maintaining scalable web applications.
                    I enjoy working across the stack-developing responsive frontend interfaces with React, managing server-side logic using Node.js and Express,
                    and handling data persistence with MongoDB. My goal is to build products that are not only functional but also intuitive and elegant.
                </motion.p>

                <div className="flex justify-center md:justify-start items-center gap-4 ">
                    <Link
                        to="Contact"
                        smooth={true}
                        duration={800}
                        offset={-50}
                    >
                        <motion.button

                            variants={container(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="mt-6 md:mt-10 text-white py-2 px-6
                    text-sm md:text-lg hover:opacity-85 duration-300 
                    hover:scale-105 font-semibold rounded-full bg-[#465697]"
                        >
                            Contact Me
                        </motion.button>
                    </Link>
                    <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={container(1.4)}
                        initial="hidden"
                        animate="visible"
                    >
                        <button
                            className="mt-6 md:mt-10 text-white py-2 px-6
                        text-sm md:text-lg hover:opacity-85 duration-300 
                      hover:scale-105 font-semibold rounded-full bg-[#2f4e71]"
                        >
                            Resume
                        </button>
                    </motion.a>
                </div>

            </div>


            {/* Right Section (Image) */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <img
                    className="w-60 h-60 md:w-96 md:h-96 rounded-full object-cover shadow-lg"
                    src={img}
                    alt="Profile"
                />
            </motion.div>

        </div>
    );
};

export default Home;

