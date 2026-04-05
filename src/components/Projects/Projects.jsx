import ProjectCards from './ProjectCards';

const featuredProjects = [
    {
        title: 'Hcase',
        main: 'A polished web platform focused on clear information architecture, fast load times, and a professional experience tailored for case-related services and audiences.',
        live: 'https://hcase.in',
        stackImages: ['/images/hcase1.png', '/images/hcase2.png'],
        tags: ['React', 'Responsive UI', 'Performance'],
        featured: true,
    },
    {
        title: 'Cognentra',
        main: 'Corporate web presence with emphasis on trust, structured content, and scalable layout patterns—built for clarity across marketing, services, and contact flows.',
        live: 'https://cognentra.com',
        image: '/images/cognentra.png',
        tags: ['Next.js', 'Tailwind CSS', 'SEO'],
        featured: false,
    },
    {
        title: 'Kgbhut',
        main: 'Engaging, mobile-first site combining strong visuals with straightforward navigation—optimized for discovery, storytelling, and conversion on any device.',
        live: 'https://kgbhut.com',
        image: '/images/kgbhut.png',
        tags: ['JavaScript', 'UI/UX', 'Mobile-first'],
        featured: false,
    },
];

const otherProjects = [
    {
        title: 'mediConnect',
        main: 'A doctor appointment web app for browsing providers, booking visits, and managing appointments—focused on a clear patient flow, responsive layout, and a trustworthy clinical feel.',
        live: 'https://mediconnect-doctor-appointment-app.netlify.app/',
        image: '/images/mediconnect-doctor-appointment-app.png',
        tags: ['React', 'Responsive UI', 'Healthcare'],
    },
    {
        title: 'E-Commerce',
        main: 'A responsive and interactive e-commerce website built with React, Redux and Tailwind CSS with features like product listing, shopping cart, wishlist and user login/signup.',
        github: 'https://github.com/shraddha2820/shopFusion-e-com',
        live: 'https://shopfusion-e-com.netlify.app/',
        image: '/certificates/img1.png',
        tags: ['React', 'Redux', 'Tailwind CSS'],
    },
    {
        title: 'BookMyShow',
        main: 'A movie booking web app built with React, Express, and MongoDB. Users can select movies, showtimes, and seats, with real-time booking updates and persistent data.',
        github: 'https://github.com/shraddha2820/BookMyShow',
        live: 'https://bookmyshow-front.netlify.app/',
        image: '/certificates/img2.jpeg',
        tags: ['React', 'Express', 'MongoDB'],
    },
];

const allProjects = [...featuredProjects, ...otherProjects];

const Projects = () => {
    return (
        <section
            id="Projects"
            className="border-t border-gray-200 bg-white px-4 py-16 md:px-8 md:py-20 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
                    <h2 className="max-w-4xl font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-primaryBg md:text-4xl lg:text-5xl">
                        Here&apos;s a glimpse of some exciting
                        projects I&apos;ve done
                    </h2>
                   
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {allProjects.map((project, index) => (
                        <ProjectCards
                            key={`${project.title}-${index}`}
                            title={project.title}
                            main={project.main}
                            github={project.github}
                            live={project.live}
                            image={project.image}
                            stackImages={project.stackImages}
                            tags={project.tags}
                            featured={project.featured === true}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
