import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../Portfolio-Logo.png';

const Navbar = () => {
    return (
        <header className='h-16'>
            <nav className='flex justify-center items-center w-full z-10 bg-navColor p-5 top-0 left-0 fixed lg:justify-between'>
                <div className='w-1/2 lg:w-1/6 ml-5'>
                    <img className='max-w-full max-h-full' src={Logo} alt='Logo' />
                </div>
                <div className='hidden lg:flex justify-between w-1/2 mr-20 text-white text-2xl'>
                    <Link to='Home' smooth={true} offset={-70} duration={500} className='cursor-pointer hover:text-textColor hidden lg:block'>Home</Link>
                    <Link to='Über-mich' smooth={true} offset={-50} duration={500} className='cursor-pointer hover:text-textColor hidden lg:block'>Über mich</Link>
                    <Link to='Skills' smooth={true} offset={-120} duration={500} className='cursor-pointer hover:text-textColor hidden lg:block'>Skills</Link>
                    <Link to='Projekte' smooth={true} offset={-120} duration={500} className='cursor-pointer hover:text-textColor hidden lg:block'>Projekte</Link>
                    <Link to='Kontakt' smooth={true} offset={-70} duration={500} className='cursor-pointer hover:text-textColor hidden lg:block'>Kontakt</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;