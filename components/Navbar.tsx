'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "py-4 bg-black/60 backdrop-blur-md border-b border-white/5" 
            : "py-6 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
               <div className="absolute inset-0 bg-primary/20 blur-md rounded-lg group-hover:bg-primary/40 transition-colors"></div>
               <div className="relative w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-bold text-lg shadow-lg">
                 Z
               </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">Zyntract</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-sm">
            {[
              { label: 'Features', href: '#features' },
              { label: 'How it works', href: '#how-it-works' },
              { label: 'Pricing', href: '#pricing' }
            ].map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
             <Link 
               href="https://chrome.google.com/webstore" 
               target="_blank" 
               className="group flex items-center gap-2 px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
             >
              Install Extension
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-50 relative"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black pt-28 px-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white border-b border-white/10 pb-4">Features</Link>
              <Link href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white border-b border-white/10 pb-4">How it works</Link>
              <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white border-b border-white/10 pb-4">Pricing</Link>
              <Link 
                href="https://chrome.google.com/webstore" 
                target="_blank"
                className="mt-4 w-full py-4 bg-white text-black font-bold rounded-xl text-center text-lg"
              >
                Install Extension
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
