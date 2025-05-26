import React from 'react';
import img from "../../assets/my_img.jpeg";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "motion/react"



const About = () => {
    return (
        <div
            id="About"
            className="text-white bg-black bg-opacity-40 rounded-lg shadow-xl mx-4 md:mx-20 p-8 md:p-12 overflow-hidden"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
            <div className="md:flex items-center gap-10">
                <motion.img
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0" src={img} alt="Profile" />

                <motion.ul
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 mt-6 md:mt-0 space-y-6">
                    <li

                        className="flex gap-4">
                        <IoArrowForward size={28} className="text-teal-400 mt-1" />
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                    bg-clip-text text-transparent">Frontend Developer</h3>
                            <p className="text-sm md:text-base text-gray-300">
                                Passionate about crafting responsive and user-friendly web interfaces using React,
                                Tailwind CSS, and modern JavaScript frameworks. I aim to create seamless user experiences
                                that are both aesthetic and functional.
                            </p>
                        </div>
                    </li>

                    <li className="flex gap-4">
                        <IoArrowForward size={28} className="text-teal-400 mt-1" />
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                    bg-clip-text text-transparent">Backend Developer</h3>
                            <p className="text-sm md:text-base text-gray-300">
                                Skilled in building scalable and secure APIs using Node.js and Express. I ensure efficient
                                communication between frontend and backend systems, integrating robust authentication and
                                database solutions.
                            </p>
                        </div>
                    </li>

                    <li className="flex gap-4">
                        <IoArrowForward size={28} className="text-teal-400 mt-1" />
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                    bg-clip-text text-transparent">Database Management</h3>
                            <p className="text-sm md:text-base text-gray-300">
                                Experienced with MongoDB and SQL-based databases, focusing on data modeling, optimization,
                                and integration to support dynamic and high-performance web applications.
                            </p>
                        </div>
                    </li>
                </motion.ul>
            </div>
        </div>
    );
};

export default About;
