import React from 'react';
import { FaGithub, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
import { MdJavascript } from 'react-icons/md';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiRedux } from "react-icons/si";
import { motion as Motion } from "framer-motion";
import {
    CodeXml,
    Terminal,
    Database,
    SlidersVertical,
    LayoutGrid,
    LayoutTemplate,
} from "lucide-react";

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

const specializeCards = [
    {
        title: 'Front-end Development',
        description: 'Expert in HTML5, CSS3, JavaScript (ES6+), React, Next.js',
        Icon: CodeXml,
    },
    {
        title: 'Back-end Development',
        description: 'Expert in Node.js, Express',
        Icon: Terminal,
        highlight: true,
    },
    {
        title: 'Database Management',
        description: 'Expert in MySQL, MongoDB, PostgreSQL',
        Icon: Database,
    },
    {
        title: 'Version Control',
        description: 'Expert in Git, GitHub — delivering clean collaboration.',
        Icon: SlidersVertical,
    },
    {
        title: 'Responsive Design',
        description: 'Visually appealing, functional websites across all devices.',
        Icon: LayoutGrid,
    },
    {
        title: 'UI/UX Design',
        description: 'Wireframing, prototyping, and user flow analysis.',
        Icon: LayoutTemplate,
    },
];

const Skills = () => {
    return (
        <div id="Skills" className="bg-primaryBg">
            <section className="w-full bg-white border-b border-gray-200 px-4 md:px-6 py-14 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-primaryBg leading-tight mb-12 md:mb-16 px-2 font-heading">
                        I specialize in a range of skills
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {specializeCards.map((card) => {
                            const IconComponent = card.Icon;
                            const lime = card.highlight === true;
                            return (
                                <div
                                    key={card.title}
                                    className={[
                                        'flex flex-col items-center text-center rounded-2xl border p-6 md:p-8 shadow-sm transition-shadow duration-300',
                                        lime
                                            ? 'border-primaryBg/20 bg-btn shadow-md shadow-btn/30 hover:shadow-lg'
                                            : 'border-gray-200 bg-white hover:shadow-md',
                                    ].join(' ')}
                                >
                                    <div
                                        className={[
                                            'mb-5 flex h-14 w-14 items-center justify-center rounded-xl border',
                                            lime
                                                ? 'border-primaryBg/25 bg-primaryBg/15 text-primaryBg'
                                                : 'border-gray-100 bg-gray-50 text-slate-800',
                                        ].join(' ')}
                                    >
                                        <IconComponent className="h-9 w-9" strokeWidth={1.35} aria-hidden />
                                    </div>
                                    <h3 className="font-heading text-base md:text-lg font-bold uppercase tracking-wide text-primaryBg mb-3">
                                        {card.title}
                                    </h3>
                                    <p
                                        className={[
                                            'text-sm leading-relaxed max-w-xs',
                                            lime ? 'text-primaryBg/90' : 'text-slate-600',
                                        ].join(' ')}
                                    >
                                        {card.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <div className="relative w-full overflow-hidden border-b border-white/10 bg-[#060b08] pb-24 px-4 md:px-6">
                <div className="pointer-events-none absolute inset-0 opacity-55 bg-[radial-gradient(circle_at_18%_12%,rgba(34,197,94,0.45),transparent_32%),radial-gradient(circle_at_84%_18%,rgba(163,230,53,0.28),transparent_30%),linear-gradient(90deg,rgba(34,197,94,0.12),transparent_18%,transparent_82%,rgba(34,197,94,0.12))]" />
                <div className="relative z-10">
                    <Motion.h1
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        className="section-title text-center my-12 md:my-16 pt-2 !text-[#F4F9E9]"
                    >
                        Technical Skills
                    </Motion.h1>

                    <div className="flex sm:flex-col-3 flex-wrap items-center justify-center gap-4">
                        {techSkills.map((skill, index) => (
                            <Motion.div
                                key={index}
                                custom={index}
                                variants={iconVariants}
                                animate="animate"
                                className="flex flex-col items-center gap-2 p-6 rounded-xl border border-white/10
                                hover:shadow-lg hover:scale-105 transition duration-300 bg-black/25 backdrop-blur-sm"
                            >
                                <div className="text-6xl">{skill.icon}</div>
                                <p className="tech-mono text-textPrimary text-[13px] font-medium mt-2">{skill.name}</p>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
