import { useState } from 'react'
import { RiCloseLine, RiMenu2Line } from "@remixicon/react"
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='sticky top-0 z-50 flex justify-between items-center px-6 py-4 md:px-20 bg-black bg-opacity-80 text-white shadow-md'>
            <span className='text-2xl font-extrabold tracking-wide'>Portfolio</span>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-10 font-semibold text-lg'>
                {["Home", "About", "Skills", "Projects", "Certificates", "Contact"].map(link => (
                    <a key={link} href={`#${link}`} className='transition-all duration-200 hover:text-indigo-400'>
                        <li>{link}</li>
                    </a>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div
                className='md:hidden cursor-pointer'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={28} />}
            </div>

            {/* Mobile Dropdown Menu */}
            <ul className={`absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-md transition-all duration-300 ease-in-out 
          ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"} 
          md:hidden flex flex-col items-center gap-6 py-6 rounded-b-xl shadow-lg`}>
                {["Home", "About", "Skills", "Projects", "Certificates", "Contact"].map(link => (
                    <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>
                        <li className='text-lg font-medium hover:text-indigo-400 transition duration-200'>{link}</li>
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
