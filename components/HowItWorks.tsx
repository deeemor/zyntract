'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Open Target Website',
      description: 'Navigate to any page you want to scrape. Open the Zyntract extension sidebar.'
    },
    {
      num: '02',
      title: 'AI Analysis',
      description: 'Zyntract scans the DOM, identifying repeating patterns, tables, and product grids automatically.'
    },
    {
      num: '03',
      title: 'Export Data',
      description: 'Review the preview. Download as JSON/CSV or copy the generated Puppeteer code.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Extraction in 3 Steps</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative bg-black p-6 rounded-2xl border border-white/5 md:border-none md:bg-transparent text-center md:text-left"
            >
              <div className="text-6xl font-bold text-white/5 mb-4 font-mono">{step.num}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-neutral-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
