import { useState } from 'react'
import { RiCloseLine, RiMenu2Line } from "@remixicon/react"
import { Link } from "react-scroll";

const Navbar = ({ onHero = false }) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const navClass = onHero
        ? 'relative z-30 flex justify-between items-center px-6 py-6 md:px-12 lg:px-14 text-textPrimary'
        : 'sticky top-0 z-50 flex justify-between items-center px-6 py-4 md:px-20 bg-secondaryBg/90 text-textPrimary shadow-md backdrop-blur-md border-b border-white/10';

    return (
        <nav className={navClass}>
            <span className='font-heading text-[22px] md:text-[30px] font-semibold tracking-tight'>Portfolio</span>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-8 font-medium text-[14px] text-textPrimary/90'>
                {["Home", "Services", "Skills", "Projects", "Certificates", "Contact"].map(link => (
                    <a key={link} href={`#${link}`} className='transition-all duration-200 hover:text-accent'>
                        <li>{link}</li>
                    </a>
                ))}
            </ul>

            <Link to="Contact" smooth={true} duration={700} offset={-40} className='hidden md:inline-block'>
                <button className='bg-btn text-primaryBg font-semibold px-6 py-2.5 rounded-[2px] hover:opacity-90 transition shadow-md shadow-btn/25'>
                    Let's Talk!
                </button>
            </Link>

            {/* Mobile Menu Icon */}
            <div
                className='md:hidden cursor-pointer z-40'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={28} />}
            </div>

            {/* Mobile Dropdown Menu */}
            <ul className={`absolute top-full left-0 w-full bg-secondaryBg/95 backdrop-blur-md transition-all duration-300 ease-in-out 
          ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"} 
          md:hidden flex flex-col items-center gap-6 py-6 rounded-b-xl shadow-lg border-b border-white/10`}>
                {["Home", "Services", "Skills", "Projects", "Certificates", "Contact"].map(link => (
                    <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>
                        <li className='text-[16px] font-medium hover:text-accent transition duration-200'>{link}</li>
                    </a>
                ))}
            </ul>
        </nav>
    );
};





//         <nav className='flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 text-white'>
//             <span className='text-xl font-bold tracking-wide'>Portfolio</span>

//             <ul className={`${menuOpen ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 px-2 rounded-xl bg-opacity-30 md:border-none bg-black text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
//                 <a href="#Home"><li className='text-md transition-all duration-300 p-1 md:p-0'>Home</li></a>
//                 <a href="#About"><li className='text-md transition-all duration-300 p-1 md:p-0'>About</li></a>
//                 <a href="#Skills"><li className='text-md transition-all duration-300 p-1 md:p-0'>Skills</li></a>
//                 <a href="#Projects"><li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li></a>
//                 <a href="#Certificates"><li className='text-md transition-all duration-300 p-1 md:p-0'>Certificates</li></a>
//                 <a href="#Contact"><li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li></a>
//             </ul>

//             {/* Menu Toggle Icon */}
//             <div
//                 className='md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300'
//                 onClick={() => setMenuOpen(!menuOpen)}
//             >
//                 {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
//             </div>
//         </nav>


//     )
// }

export default Navbar
