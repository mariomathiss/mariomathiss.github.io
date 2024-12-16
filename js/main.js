import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <a href="/" className="text-xl font-bold text-gray-800">
            Mario Mathiss
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="/visualizations" className="text-gray-600 hover:text-gray-900">Data Viz</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-gray-600 transform transition ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-gray-600 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-8 h-0.5 bg-gray-600 transform transition ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
            <a href="/projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
            <a href="/visualizations" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Data Viz</a>
            <a href="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
