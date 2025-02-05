"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#FFD700] cyberpunk-glow">
            GDG HACKS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/tracks">Tracks</NavLink>
            <NavLink href="/schedule">Schedule</NavLink>
            <NavLink href="/sponsors">Sponsors</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <button className="cyberpunk-button">Register Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#FFD700]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-lg"
          >
            <div className="px-4 py-6 space-y-4">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/tracks" onClick={() => setIsMenuOpen(false)}>Tracks</MobileNavLink>
              <MobileNavLink href="/schedule" onClick={() => setIsMenuOpen(false)}>Schedule</MobileNavLink>
              <MobileNavLink href="/sponsors" onClick={() => setIsMenuOpen(false)}>Sponsors</MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              <button className="w-full cyberpunk-button mt-4">Register Now</button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-white/80 hover:text-[#FFD700] transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      className="block text-white/80 hover:text-[#FFD700] transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}