import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className='flex justify-between item-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=' hidden max-lg:block'>
          <img
            src={hamburger}
            alt='Hamburger'
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
          {isMenuOpen && (
            <ul className="absolute right-[55px] top-3 mt-1 bg-white shadow-2xl rounded-md p-3  ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray block py-2 px-4 hover:bg-gray-100'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
 