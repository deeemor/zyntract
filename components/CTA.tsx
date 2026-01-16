'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Database, Code2 } from 'lucide-react';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-full opacity-30 pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
             <Terminal size={14} className="text-primary" />
             <span>Ready to automate?</span>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white"
        >
          Start Scraping <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Smarter.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join 10,000+ developers turning the web into structured APIs. Install the extension and get your first schema in seconds.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="https://chrome.google.com/webstore" 
            target="_blank"
            className="group flex items-center justify-center gap-2 px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-neutral-200 transition-all active:scale-95 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <Download size={20} />
            Add to Chrome
          </Link>
          <Link 
            href="#demo"
            className="group flex items-center justify-center gap-2 px-10 py-5 bg-black border border-white/10 text-white text-lg font-medium rounded-full hover:bg-white/5 hover:border-white/20 transition-all active:scale-95 w-full sm:w-auto"
          >
            Contact Sales
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <div className="mt-12 flex items-center justify-center gap-8 opacity-50 grayscale">
           {/* You can add partner logos here if available */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
