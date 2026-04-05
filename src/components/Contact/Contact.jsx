
import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion as Motion } from 'framer-motion';

const social = [
    {
        href: 'https://www.linkedin.com/in/shraddha-tripathi-451a61128/',
        label: 'LinkedIn',
        Icon: FaLinkedin,
    },
    {
        href: 'https://github.com/shraddha2820',
        label: 'GitHub',
        Icon: FaGithub,
    },
    {
        href: 'mailto:techshraddha28@gmail.com',
        label: 'Email',
        Icon: MdEmail,
    },
    {
        href: 'https://www.instagram.com/i_m_shraddha28/',
        label: 'Instagram',
        Icon: FaInstagram,
    },
];

const Contact = () => {
    return (
        <div className="w-full md:ml-auto md:max-w-lg">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-slate-500 md:text-left">
                Contact
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start md:gap-4">
                <a
                    href="mailto:techshraddha28@gmail.com"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-left shadow-sm transition hover:border-gray-300 hover:shadow md:justify-start"
                >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <MdEmail className="text-xl" aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-primaryBg break-all sm:break-normal">
                        techshraddha28@gmail.com
                    </span>
                </a>
                <a
                    href="tel:+918178492630"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-left shadow-sm transition hover:border-gray-300 hover:shadow md:justify-start"
                >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-highlight/15 text-highlight">
                        <FaPhoneAlt className="text-lg" aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-primaryBg">
                        +91 8178492630
                    </span>
                </a>
            </div>

            <div className="mt-8 md:mt-10">
                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500 md:text-left">
                    Social
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                    {social.map((item) => {
                        const IconComponent = item.Icon;
                        return (
                        <Motion.a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                            aria-label={item.label}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-slate-600 shadow-sm transition hover:border-gray-300 hover:text-primaryBg hover:shadow"
                        >
                            <IconComponent aria-hidden />
                        </Motion.a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Contact;
