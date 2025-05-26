import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const iconVariants = {
    initial: { y: 0 },
    animate: {
        y: [0, -5, 0],
        transition: {
            duration: 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
        }
    }
};

const Contact = () => {
    return (

        <div id="Contact" className="text-white w-full md:w-auto">
            {/* Contact Methods */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-neutral-800 px-5 py-3 rounded-lg shadow-md"
                >
                    <MdEmail className="text-blue-400 text-xl" />
                    <span className="text-sm md:text-base">techshraddha28@gmail.com</span>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-neutral-800 px-5 py-3 rounded-lg shadow-md"
                >
                    <FaPhoneAlt className="text-green-400 text-xl" />
                    <span className="text-sm md:text-base">+91 8178492630</span>
                </motion.div>
            </div>

            {/* Social Icons */}
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants}
                className="flex justify-center gap-6 mt-6 text-2xl"
            >
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500 transition duration-300"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-400 transition duration-300"
                >
                    <FaGithub />
                </a>
                <a
                    href="mailto:techShraddha@gmail.com"
                    className="hover:text-red-400 transition duration-300"
                >
                    <MdEmail />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pink-500 transition duration-300"
                >
                    <FaInstagram />
                </a>
            </motion.div>
        </div>
        // <div id="Contact" className="border-b border-neutral-800 px-6 md:px-24 py-20 text-white">

        //     <div className="flex flex-col gap-4 md:gap-4 md:flex-row md:justify-center md:items-center mb-10">
        //         <motion.div
        //             whileHover={{ scale: 1.05 }}
        //             className="flex items-center gap-3 bg-neutral-800 px-6 py-3 rounded-xl w-fit mx-auto"
        //         >
        //             <MdEmail className="text-[#465697] text-xl" />
        //             <span className="text-sm md:text-base">techShraddha@gmail.com</span>
        //         </motion.div>

        //         <motion.div
        //             whileHover={{ scale: 1.05 }}
        //             className="flex items-center gap-3 bg-neutral-800 px-6 py-3 rounded-xl w-fit mx-auto"
        //         >
        //             <FaPhoneAlt className="text-[#465697] text-xl" />
        //             <span className="text-sm md:text-base">+91 8178492630</span>
        //         </motion.div>
        //     </div>

        //     <motion.div
        //         initial="initial"
        //         animate="animate"
        //         variants={iconVariants}
        //         className="flex justify-center gap-6 mt-8 text-2xl"
        //     >
        //         <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        //             <FaLinkedin className="hover:text-blue-500 transition duration-300" />
        //         </a>
        //         <a href="https://github.com" target="_blank" rel="noreferrer">
        //             <FaGithub className="hover:text-gray-400 transition duration-300" />
        //         </a>
        //         <a href="mailto:techShraddha@gmail.com">
        //             <MdEmail className="hover:text-red-400 transition duration-300" />
        //         </a>
        //         <a href="https://instagram.com" target="_blank" rel="noreferrer">
        //             <FaInstagram className="hover:text-pink-500 transition duration-300" />
        //         </a>
        //     </motion.div>
        // </div>
    );
};

export default Contact;

























// import React from 'react'
// import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
// import { MdEmail } from 'react-icons/md'
// import { motion } from "motion/react"

// const Contact = () => {
//     return (
//         <div
//             id="Contact"
//             className='border-b border-neutral-900 pb-20 m-4'>
//             <motion.h1
//                 animate={{ x: 100 }}

//                 className='my-10 text-center text-white text-4xl'>Get in Touch</motion.h1>
//             <div className='flex gap-2 items-center'>
//                 <MdEmail className='text-xl text-[#465697]' />
//                 <h3 className='text-md text-white'>techShraddha@gmail.com</h3>
//             </div>
//             <div className='flex gap-2 items-center pt-2'>
//                 <FaPhoneAlt className='text-xl text-[#465697]' />
//                 <h3 className='text-md text-white'>+91 8178492630</h3>
//             </div>
//             <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
//                 <FaLinkedin />
//                 <FaGithub />
//                 <MdEmail />
//                 <FaInstagram />
//             </div>

//         </div>
//     )
// }

// export default Contact
