import React from 'react';
import Logo from '../Portfolio-Logo.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-5 w-full top-0 left-0 fixed bg-black'>
            <div className='w-1/5 ml-5'>
                <img className='max-w-full max-h-full' src={Logo} alt='Logo' />
            </div>
            <div className='flex justify-between w-1/2 mr-20 text-textColor'>
                <a href='#'>Home</a>
                <a href='#'>Über mich</a>
                <a href='#'>Skills</a>
                <a href='#'>Projekte</a>
                <a href='#'>Kontakt</a>
            </div>
        </div>
    );
};

export default Navbar;