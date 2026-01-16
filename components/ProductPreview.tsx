'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Eye, MousePointer2, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

const ProductPreview: React.FC = () => {
  const [activeElement, setActiveElement] = useState<number | null>(null);

  return (
    <section className="py-32 bg-neutral-900/20 overflow-hidden relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Text Content */}
        <div className="flex-1">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 mb-6 font-mono uppercase tracking-wider"
          >
             <Eye size={12} />
             <span>Visual DOM Inspector</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            See What the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI Sees.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg mb-10 leading-relaxed max-w-xl"
          >
            Zyntract visualizes the DOM structure in real-time. Hover over any element to see its unique selector, data attributes, and calculated path. It's like X-Ray vision for data extraction.
          </motion.p>
          
          <ul className="space-y-6">
            {[
              { title: 'Real-time DOM highlighting', desc: 'Identify containers instantly.', color: 'bg-green-500' },
              { title: 'Automatic pagination detection', desc: 'Crawls multiple pages for you.', color: 'bg-blue-500' },
              { title: 'Headless browser simulation', desc: 'Renders JS-heavy SPAs perfectly.', color: 'bg-purple-500' }
            ].map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex items-start gap-4"
              >
                <div className={`mt-1 w-6 h-6 rounded-full ${item.color}/20 flex items-center justify-center shrink-0`}>
                  <div className={`w-2 h-2 ${item.color} rounded-full shadow-[0_0_10px_currentColor]`} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">{item.title}</h4>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl p-2 group"
          >
            <div className="rounded-xl overflow-hidden relative aspect-[4/3] bg-neutral-950 border border-white/5">
              
              {/* Fake Website UI */}
              <div className="absolute inset-0 p-6 grid grid-cols-2 gap-4">
                 {[1, 2, 3, 4].map((i) => (
                   <div 
                     key={i}
                     onMouseEnter={() => setActiveElement(i)}
                     onMouseLeave={() => setActiveElement(null)}
                     className={clsx(
                       "rounded-lg border-2 transition-all duration-200 relative cursor-crosshair",
                       activeElement === i 
                         ? "border-primary bg-primary/10 z-10" 
                         : "border-neutral-800 bg-neutral-900/50"
                     )}
                   >
                     <div className="h-32 bg-neutral-800/50 rounded mb-3 w-full" />
                     <div className="h-4 w-3/4 bg-neutral-700/50 rounded mb-2" />
                     <div className="h-3 w-1/2 bg-neutral-800/50 rounded" />

                     {/* Tooltip */}
                     <AnimatePresence>
                       {activeElement === i && (
                         <motion.div 
                           initial={{ opacity: 0, scale: 0.9, y: 10 }}
                           animate={{ opacity: 1, scale: 1, y: 0 }}
                           exit={{ opacity: 0, scale: 0.9, y: 10 }}
                           className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md border border-white/20 text-white text-[10px] px-3 py-1.5 rounded-full font-mono whitespace-nowrap z-20 shadow-xl flex items-center gap-2"
                         >
                           <span className="text-primary font-bold">div.product-card</span>
                           <span className="text-neutral-500">|</span>
                           <span className="text-neutral-300">nth-child({i})</span>
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </div>
                 ))}
              </div>

              {/* Cursor Simulation */}
              <motion.div 
                className="absolute pointer-events-none z-30 text-white drop-shadow-md"
                animate={{ 
                  x: [50, 200, 200, 50, 50],
                  y: [50, 50, 200, 200, 50],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MousePointer2 className="fill-black" />
              </motion.div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-3 flex justify-between items-center text-xs font-mono">
                <div className="flex gap-4 text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span>DOM: Connected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Code size={12} />
                    <span>4 Nodes</span>
                  </div>
                </div>
                <div className="text-primary">Processing...</div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProductPreview;
