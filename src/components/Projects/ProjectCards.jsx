import { motion as Motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCards = ({
    title,
    main,
    github,
    live,
    image,
    stackImages,
    tags = [],
    featured = false,
    index = 0,
}) => {
    const href = live || github || '#';
    const hasStack = Array.isArray(stackImages) && stackImages.length >= 2;

    return (
        <Motion.article
            custom={index}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
            <div className="relative w-full overflow-hidden">
                {hasStack ? (
                    <div className="relative aspect-[16/10] w-full min-h-[200px] bg-slate-100/90 md:aspect-video">
                        {/* Back layer: right column only — not full width */}
                        <img
                            src={stackImages[0]}
                            alt=""
                            className="absolute right-0 top-[6%] bottom-[6%] z-0 w-[48%] rounded-xl object-cover object-center shadow-md sm:right-1 sm:w-[46%] md:w-[44%]"
                        />
                        {/* Front layer: left card ~55% width, overlaps center */}
                        <div className="absolute left-0 top-[5%] bottom-[5%] z-10 w-[58%] overflow-hidden rounded-xl border border-white/90 bg-white shadow-[0_20px_45px_-6px_rgba(15,23,42,0.28)] sm:left-1 sm:w-[56%] md:left-2 md:w-[54%]">
                            <img
                                src={stackImages[1]}
                                alt=""
                                className="h-full w-full object-cover object-top-left"
                            />
                        </div>
                    </div>
                ) : (
                    <img
                        src={image}
                        alt=""
                        className="aspect-video w-full object-cover object-top"
                    />
                )}
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold text-primaryBg md:text-2xl">
                    {title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                    {main}
                </p>

                {tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5">
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 text-primaryBg"
                    >
                        <span className="text-sm font-semibold md:text-base">View Project</span>
                        <span
                            className={[
                                'flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition group-hover:opacity-90',
                                featured
                                    ? 'bg-btn text-primaryBg shadow-sm'
                                    : 'border border-gray-300 bg-white text-slate-600',
                            ].join(' ')}
                        >
                            {featured ? (
                                <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                            ) : (
                                <ArrowRight className="h-5 w-5" strokeWidth={2} aria-hidden />
                            )}
                        </span>
                    </a>
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-primaryBg"
                        >
                            <FaGithub className="text-lg" aria-hidden />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </Motion.article>
    );
};

export default ProjectCards;
