import React, { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  onFeaturesClick: () => void;
  onHowItWorksClick: () => void;
  onFAQClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onFeaturesClick, onHowItWorksClick, onFAQClick}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkBlue text-white p-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-4">
          <img src="/image-removebg-preview.png" alt="StudyMate AI Logo" className="h-15 w-20" />
        
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:bg-yellowHighlight p-2 rounded text-white hover:text-darkBlue transition duration-200 ease-in-out">Home</Link>
            <a onClick={onFeaturesClick} className="hover:bg-yellowHighlight p-2 rounded text-white hover:text-darkBlue transition duration-200 ease-in-out">Features</a>
            <a onClick={onHowItWorksClick} className="hover:bg-yellowHighlight p-2 rounded text-white hover:text-darkBlue transition duration-200 ease-in-out">How it works</a>
            <a onClick={onFAQClick} className="hover:bg-yellowHighlight p-2 rounded text-white hover:text-darkBlue transition duration-200 ease-in-out">FAQ</a>
          </div>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="hover:bg-yellowHighlight p-2 rounded text-white hover:text-darkBlue transition duration-200 ease-in-out">Login</Link>
          <Link href="/register" className="bg-yellowHighlight hover:bg-yellow-600 p-2 rounded text-darkBlue transition duration-200 ease-in-out">Register</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white"
          aria-expanded={isOpen}
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2">
          <Link href="/" className="block p-2 bg-darkBlue text-white hover:bg-yellowHighlight hover:text-darkBlue">Home</Link>
          <a onClick={onFeaturesClick} className="block p-2 bg-darkBlue text-white hover:bg-yellowHighlight hover:text-darkBlue">Features</a>
          <a onClick={onHowItWorksClick} className="block p-2 bg-darkBlue text-white hover:bg-yellowHighlight hover:text-darkBlue">How it works</a>
          <a onClick={onFAQClick} className="block p-2 bg-darkBlue text-white hover:bg-yellowHighlight hover:text-darkBlue">Faq</a>
          <Link href="/login" className="block p-2 bg-darkBlue text-white hover:bg-yellowHighlight hover:text-darkBlue">Login</Link>
          <Link href="/register" className="block p-2 bg-darkBlue text-yellowHighlight hover:bg-yellow-600 hover:text-darkBlue">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
