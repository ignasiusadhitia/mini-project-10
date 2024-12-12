import React, { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full ${isScrolled ? 'bg-white opacity-95 shadow-sm text-black' : 'bg-transparent text-white'}`}
    >
      <nav className="container flex justify-between py-11 px-7.5">
        <span className="block font-bold text-4xl">FurniShop</span>
        <ul className="flex gap-16">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-base hover:font-semibold">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
