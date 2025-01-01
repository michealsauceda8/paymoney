import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Logo</div>
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="p-2">Home</Link>
          <Link to="/about" className="p-2">About Us</Link>
          <Link to="/support" className="p-2">Support</Link>
          <Link to="/faq" className="p-2">FAQ</Link>
        </nav>
        <button onClick={toggleMenu} className="md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
