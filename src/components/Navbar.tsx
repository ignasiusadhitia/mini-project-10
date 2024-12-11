import React from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="container flex justify-between py-11 px-7.5">
        <span className="block font-bold text-white text-4xl">FurniShop</span>
        <ul className="flex gap-16">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-base text-white hover:font-semibold"
              >
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
