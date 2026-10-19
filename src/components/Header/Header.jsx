import Logo from '../../assets/images/Logo.webp';
import Search from '../../assets/icons/search.webp';
import User from '../../assets/icons/user.webp';
import Basket from '../../assets/icons/basket.webp';

import { useState } from 'react';

import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 h-19 w-full flex items-center justify-between bg-[#FFFAFA] px-4 sm:px-6 lg:px-16">

            {/*-------------------Logo------------------- */}
            <div className=''>
                <img src={Logo} className='w-23 h-auto' alt="Logo" />
            </div>

            {/*-------------------Menu------------------- */}
            <div
                id="header-navigation"
                className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}
            >
                <ul className="flex flex-col gap-4 text-[16px] text-primary font-medium items-center md:flex-row md:items-center md:gap-8">
                    <li className="font-bold">
                        <a href="#" className="text-inherit no-underline hover:text-hover-button transition-all duration-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-inherit no-underline hover:text-hover-button transition-colors duration-400">
                            Shop
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-inherit no-underline hover:text-hover-button transition-colors duration-400">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-inherit no-underline hover:text-hover-button transition-colors duration-400">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/*-------------------Icons------------------- */}
            <div className='flex gap-4 items-center'>
                <img src={Search} className="w-7.5 h-auto" alt="Search" />
                <img src={User} className="w-7.5 h-auto" alt="User" />
                <img src={Basket} className="w-7.5 h-auto" alt="Basket" />

                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="header-navigation"
                    className="w-8 h-8 shrink-0 md:hidden border-0 bg-transparent p-0 text-2xl leading-none text-primary"
                >
                    {isMenuOpen ? "✗" : "☰"}
                </button>
            </div>
        </header>
    )
}

export default Header;