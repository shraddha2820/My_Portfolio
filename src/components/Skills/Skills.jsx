import React from 'react';
import { FaGithub, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
import { MdJavascript } from 'react-icons/md';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";


const iconVariants = {
    animate: (i) => ({
        y: [10, -10],
        transition: {
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.5
        }
    })
};

const techSkills = [
    { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML' },
    { icon: <FaCss3 className="text-blue-600" />, name: 'CSS' },
    { icon: <MdJavascript className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <RiReactjsLine className="text-cyan-400" />, name: 'React' },
    { icon: <SiRedux className="text-purple-700" />, name: 'Redux' },
    { icon: <TbBrandNextjs className="text-white" />, name: 'Next.js' },
    { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
    { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
    { icon: <FaGithub className="text-white" />, name: 'GitHub' },
];


const Skills = () => {
    return (
        <div id="Skills" className="border-b border-neutral-800 pb-24 px-4 bg-gradient-to-br from-purple-900 to-black">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="text-4xl text-center text-white font-bold my-20 pt-2">Technical Skills</motion.h1>

            <div className="flex sm:flex-col-3 flex-wrap items-center justify-center gap-4">
                {techSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={iconVariants}
                        animate="animate"
                        className="flex flex-col items-center gap-2 p-6 rounded-xl border-2 border-neutral-700
                        hover:shadow-lg hover:scale-105 transition duration-300 bg-neutral-900/40 backdrop-blur"
                    >
                        <div className="text-6xl">{skill.icon}</div>
                        <p className="text-white text-sm font-medium mt-2">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;


