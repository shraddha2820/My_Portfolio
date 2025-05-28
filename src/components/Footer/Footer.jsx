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

