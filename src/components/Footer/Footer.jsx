import { Link } from 'react-scroll';
import { ArrowRight, ArrowUpRight, ChevronUp } from 'lucide-react';

const email = 'techshraddha28@gmail.com';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            id="footer"
            className="border-t border-stone-200/80 bg-[#F9F8F3]"
        >
            <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20 lg:py-24">
                <h2 className="text-center font-serif text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                    INTERESTED IN
                    <br />
                    WORKING TOGETHER?
                </h2>

                <div className="mt-12 text-center md:mt-16">
                    <p className="text-sm font-medium text-neutral-500 md:text-base">
                        Drop me an email:
                    </p>
                    <a
                        href={`mailto:${email}`}
                        className="mt-3 block font-sans text-2xl font-bold tracking-tight text-neutral-900 transition hover:opacity-80 sm:text-3xl md:text-4xl"
                    >
                        {email}
                    </a>
                </div>
            </div>

            <div className="w-full border-t border-stone-300/80" aria-hidden />

            <div className="mx-auto max-w-5xl px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12 lg:pb-24">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-6">
                    <p className="order-2 text-center text-xs text-neutral-500 md:order-1 md:text-left md:text-sm">
                        Copyright © {year} Shraddha
                    </p>

                    <div className="order-1 flex flex-wrap items-center justify-center gap-3 md:order-2">
                        <a
                            href="https://github.com/shraddha2820"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-btn px-5 py-2.5 text-sm font-semibold text-primaryBg shadow-sm transition hover:opacity-90"
                        >
                            GitHub
                            <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shraddha-tripathi-451a61128/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
                        >
                            LinkedIn
                            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
                        </a>
                        <a
                            href="https://www.instagram.com/i_m_shraddha28/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
                        >
                            Instagram
                            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
                        </a>
                    </div>

                    <Link
                        to="Home"
                        smooth
                        duration={600}
                        offset={0}
                        className="order-3 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-neutral-900 transition hover:text-primaryBg"
                    >
                        Back to Top
                        <ChevronUp className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
