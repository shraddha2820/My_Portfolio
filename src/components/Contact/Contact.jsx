
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
                    href="https://www.linkedin.com/in/shraddha-tripathi-451a61128/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500 transition duration-300"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/shraddha-dotcom"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-400 transition duration-300"
                >
                    <FaGithub />
                </a>
                <a
                    href="mailto:techshraddha28@gmail.com"
                    className="hover:text-red-400 transition duration-300"
                >
                    <MdEmail />
                </a>
                <a
                    href="https://www.instagram.com/i_m_shraddha28/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pink-500 transition duration-300"
                >
                    <FaInstagram />
                </a>
            </motion.div>
        </div>

    );
};

export default Contact;

























