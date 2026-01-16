'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BarChart3, Bot, Settings2 } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: <Code2 size={32} className="text-blue-400" />,
      title: 'Developers',
      description: 'Stop manually inspecting elements. Generate clean Puppeteer/Playwright scripts in seconds.'
    },
    {
      icon: <Settings2 size={32} className="text-purple-400" />,
      title: 'Automation Engineers',
      description: 'Build robust pipelines. Our resilient selectors survive layout changes.'
    },
    {
      icon: <BarChart3 size={32} className="text-green-400" />,
      title: 'Data Analysts',
      description: 'Get structured JSON immediately. No Python scripts required for simple tasks.'
    },
    {
      icon: <Bot size={32} className="text-orange-400" />,
      title: 'SaaS Founders',
      description: 'Prototype your data-driven product faster by automating content aggregation.'
    }
  ];

  return (
    <section className="py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Builders</h2>
          <p className="text-neutral-400">Whether you code or click, Zyntrakt fits your workflow.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:bg-neutral-900 transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
