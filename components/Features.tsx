'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Code, Database, FileJson, Globe, Zap, ArrowUpRight } from 'lucide-react';
import { clsx } from 'clsx';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Scan size={24} className="text-white" />,
      title: 'AI DOM Analysis',
      description: 'Automatically detects lists, tables, and product grids. Zyntract understands the page structure like a human would.',
      gradient: "from-blue-500/20 to-blue-500/0"
    },
    {
      icon: <Code size={24} className="text-white" />,
      title: 'Resilient Selectors',
      description: 'Generates robust CSS selectors that withstand layout changes. No more brittle XPath breaking your pipelines.',
      gradient: "from-purple-500/20 to-purple-500/0"
    },
    {
      icon: <FileJson size={24} className="text-white" />,
      title: 'Instant JSON Export',
      description: 'Get structured data immediately. Preview your extraction in real-time and export to JSON or CSV with one click.',
      gradient: "from-yellow-500/20 to-yellow-500/0"
    },
    {
      icon: <Database size={24} className="text-white" />,
      title: 'Puppeteer & Playwright',
      description: 'Need automation? Export ready-to-run scripts for your headless browser infrastructure.',
      gradient: "from-green-500/20 to-green-500/0"
    },
    {
      icon: <Globe size={24} className="text-white" />,
      title: 'Works Everywhere',
      description: 'React, Vue, Angular, or static HTML. Zyntract handles SPAs and dynamic content seamlessly.',
      gradient: "from-cyan-500/20 to-cyan-500/0"
    },
    {
      icon: <Zap size={24} className="text-white" />,
      title: 'Zero Latency',
      description: 'Runs entirely in your browser. No server-side rendering delays or queue times.',
      gradient: "from-orange-500/20 to-orange-500/0"
    }
  ];

  return (
    <section id="features" className="py-24 bg-black relative">
       {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Precision</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg"
          >
            Stop writing brittle scrapers. Zyntract gives you the tools to build resilient data pipelines in seconds.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string, gradient: string, index: number }> = ({ icon, title, description, gradient, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
    >
      {/* Hover Gradient */}
      <div className={clsx("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", gradient)} />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
          {icon}
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <ArrowUpRight className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
        </div>
        
        <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default Features;
