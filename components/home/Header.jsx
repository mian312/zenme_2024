'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-4 sticky top-0 z-50 bg-sky-400 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <div className="flex items-center">
          <Link href="/" className="text-white text-3xl font-semibold">
            ZenME
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white">
          <Link href="/about" className="hover:text-gray-300 transition duration-300">About Us</Link>
          <Link href="/pricing" className="hover:text-gray-300 transition duration-300">Pricing</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sky-500 shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/about" className="text-white hover:text-gray-300 transition duration-300">About Us</Link>
            <Link href="/pricing" className="text-white hover:text-gray-300 transition duration-300">Pricing</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
