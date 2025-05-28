import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 1.5,
            ease: 'easeOut',
        }
    }),
};

const ProjectCards = ({ title, main, github, live, image, index = 0 }) => {
    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='flex flex-col w-full max-w-md bg-[#0c0e19] rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 overflow-hidden'
        >
            <div className="flex items-center gap-4 p-4">
                <img src={image} alt="project logo" className='h-14 w-14 rounded-xl bg-white p-1' />
                <h3 className='text-lg md:text-2xl font-bold text-white'>{title}</h3>
            </div>

            <p className='text-gray-300 text-sm md:text-base px-4 pb-4'>
                {main}
            </p>

            <div className='flex flex-wrap justify-start gap-3 px-4 pb-4'>
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center gap-2 bg-[#465697] text-white text-sm md:text-base px-4 py-2 rounded-full hover:bg-[#5e6fa9] transition duration-300'
                    >
                        <FaGithub className='text-lg' /> GitHub
                    </a>

                )}

                {live && (
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center gap-2 bg-[#465697] text-white text-sm md:text-base px-4 py-2 rounded-full hover:bg-[#5e6fa9] transition duration-300'
                    >
                        <BiLinkExternal className='text-lg' /> Live
                    </a>

                )}


            </div>
        </motion.div>
    );
};

export default ProjectCards;

























