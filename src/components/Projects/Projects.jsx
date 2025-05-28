import ProjectCards from './ProjectCards';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};

const projectData = [
    {
        title: "Energico",
        main: "A responsive and interactive web application built with HTML, CSS, JavaScript, and Tailwind CSS. It features modern design, smooth transitions, dynamic user interactions, showcasing clean and efficient code with a focus on user experience.",
        github: "https://github.com/shraddha-dotcom/Tailwind_assignment.git",
        live: "https://shraddha-dotcom.github.io/Tailwind_assignment/",
        image: "/certificates/img.png"
    },
    {
        title: "E-Commerce",
        main: "A responsive and interactive e-commerce website built with React, Redux and Tailwind CSS with features like product listing, shopping cart, wishlist and user login/signup.",
        github: "https://github.com/shraddha-dotcom/shopFusion-e-com.git",
        live: "https://shopfusion-e-com.netlify.app/",
        image: "/certificates/img1.png"
    },
    {
        title: "BookMyShow",
        main: "A movie booking web app built with React, Express, and MongoDB. Users can select movies, showtimes, and seats, with real-time booking updates and persistent data.",
        github: "https://github.com/shraddha-dotcom/BookMyShow.git",
        live: "https://bookmyshow-front.netlify.app/",
        image: "/certificates/img2.jpeg"
    },
    {
        title: "Portfolio",
        main: "A personal portfolio website showcasing projects, skills, and contact information, built using React, Tailwind CSS, and Framer Motion for smooth animations.",
        github: "https://github.com/shraddha-dotcom/My_Portfolio.git",
        live: "https://shraddha28portfolio.netlify.app/",
        image: "/certificates/img3.png"
    },
];

const Projects = () => {
    return (
        <div id="Projects" className="px-4 md:px-24 py-16 text-white bg-black border-t border-neutral-800">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
                Projects
            </motion.h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                {projectData.map((project, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <ProjectCards title={project.title}
                            main={project.main}
                            github={project.github}
                            live={project.live}
                            image={project.image}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;








