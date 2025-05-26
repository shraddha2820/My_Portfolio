import { motion } from 'framer-motion';
import Contact from '../Contact/Contact';

const Footer = () => {
    return (
        <footer
            id="footer"
            className="bg-[#1f2937] text-white px-6 md:px-24 py-10 md:py-14 mt-10"
        >
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                {/* message*/}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left"
                >
                    <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-slate-500 to-pink-400
                    bg-clip-text text-transparent">Let’s Connect</h1>
                    <p className="text-sm md:text-base text-gray-300">
                        Feel free to reach out for collaborations or just a friendly hello! 👋
                    </p>
                </motion.div>

                {/* Social Links */}
                <Contact />

            </div>

            {/* Bottom Text */}
            <div className="pt-8 mt-8 border-t border-gray-600 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Shraddha. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

{/* <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-3 text-sm md:text-base"
                >
                    <li className="flex items-center gap-3 hover:text-blue-400 transition">
                        <MdOutlineEmail size={22} />
                        <a href="mailto:shraddhat446@gmail.com" className="truncate ">
                            shraddhat446@gmail.com
                        </a>
                    </li>

                    <li className="flex items-center gap-3 hover:text-blue-400 transition">
                        <CiLinkedin size={22} />
                        <a
                            href="https://www.linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/yourusername
                        </a>
                    </li>

                    <li className="flex items-center gap-3 hover:text-blue-400 transition">
                        <FaGithub size={22} />
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/yourusername
                        </a>
                    </li>

                    <li className="flex items-center gap-3 hover:text-blue-400 transition">
                        <FaInstagram size={22} />
                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            instagram.com/yourusername
                        </a>
                    </li>
                </motion.ul> */}


















// import React from 'react'
// import { MdOutlineEmail } from "react-icons/md"
// import { CiLinkedin } from "react-icons/ci"
// import { FaGithub } from "react-icons/fa"

// const Footer = () => {
//     return (
//         <div id="footer"
//             className='flex justify-around bg-[#465697] text-white p-10 md:p-12
//         items-center'
//         >
//             <div className=''>
//                 <h1 className='text-2xl md:text-3xl font-bold'>Contact</h1>
//                 <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out!</h3>
//             </div>
//             <ul>
//                 <li className='flex gap-2 items-center'>
//                     <MdOutlineEmail size={30} />
//                     shraddhat446@gmail.com
//                 </li>

//                 <li className='flex gap-2 items-center'>
//                     <CiLinkedin size={30} />
//                     linkedin/username
//                 </li>

//                 <li className='flex gap-2 items-center'>
//                     <FaGithub size={30} />
//                     github/username
//                 </li>
//             </ul>

//         </div>
//     )
// }

// export default Footer
