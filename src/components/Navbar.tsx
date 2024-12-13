import React, { useEffect, useState } from 'react';
import { CloseMobileMenu, MobileMenuToggle } from '../assets/icons';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full transition duration-300 ease-in-out ${isScrolled ? 'bg-white opacity-95 shadow-sm text-black' : 'bg-transparent text-white'}`}
      >
        <nav className="container flex justify-between py-11 px-7.5">
          <span className="block font-semibold md:font-bold text-2xl md:text-4xl">
            FurniShop
          </span>
          <ul className="hidden md:flex gap-16">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-base hover:font-semibold"
                  rel="noreferrer noopener"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div
            className="block md:hidden cursor-pointer"
            onClick={handleToggleMenu}
          >
            <MobileMenuToggle />
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute w-screen h-screen bg-white z-50">
          <nav className="flex flex-col items-center justify-center text-center my-auto gap-10 p-10 h-full">
            <span className="block text-black font-semibold text-lg">
              FurniShop
            </span>
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-4 px-6 text-lg hover:font-bold font-semibold"
                    rel="noreferrer noopener"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <CloseMobileMenu
              onClick={handleToggleMenu}
              className="absolute bottom-5 cursor-pointer"
            />
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
