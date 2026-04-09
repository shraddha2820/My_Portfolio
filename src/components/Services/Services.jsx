import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: 'Web Design',
        description: 'I create modern, responsive, stunning websites',
        image: '/images/my-services-img1.jpg',
        alt: 'Web design workspace',
        showCta: true,
        stagger: 'lower',
    },
    {
        title: 'App Design',
        description: 'I create sleek, intuitive app designs that enhance user experiences',
        image: '/images/my-services-img2.jpg',
        alt: 'Mobile app design',
        showCta: false,
        stagger: 'high',
    },
    {
        title: '360 Development',
        description: 'From front-end to back-end, I deliver clean, efficient code',
        image: '/images/my-services-img3.jpg',
        alt: 'Full-stack development workspace',
        showCta: false,
        stagger: 'mid',
    },
];

const staggerClass = {
    high: 'md:pt-0 md:-mt-4 lg:-mt-8',
    mid: 'md:pt-14 lg:pt-16',
    lower: 'md:pt-20 lg:pt-28',
};

const Services = () => {
    return (
        <section
            id="Services"
            className="w-full bg-aboutBg border-y border-primaryBg/10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-14 md:py-20 lg:py-24">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight !text-primaryBg uppercase max-w-xl leading-[0.95]">
                        My Services
                    </h2>
                    <p className="lg:max-w-md xl:max-w-lg text-sm md:text-base font-medium text-slate-600 uppercase tracking-wide leading-relaxed lg:text-right lg:pt-2">
                        I offer a range of services that blend design and development to create seamless, user-focused digital solutions
                    </p>
                </div>

                {/* Staggered columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8 items-start">
                    {services.map((item) => (
                        <article
                            key={item.title}
                            className={`flex flex-col gap-5 ${staggerClass[item.stagger]}`}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-slate-200/60 shadow-sm aspect-[4/5] md:aspect-[3/4]">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                                {item.showCta && (
                                    <a
                                        href="#Projects"
                                        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-btn px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-primaryBg shadow-md transition hover:opacity-90 md:text-sm"
                                    >
                                        See details
                                        <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
                                    </a>
                                )}
                            </div>
                            <div className="space-y-2 px-0.5">
                                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-wide !text-primaryBg">
                                    {item.title}
                                </h3>
                                <p className="text-xs md:text-sm font-medium uppercase tracking-wide text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
