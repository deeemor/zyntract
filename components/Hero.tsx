'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Database, Code2 } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-50 pointer-events-none mix-blend-screen" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-xs tracking-wide uppercase">v2.0 System Online</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50 max-w-5xl"
          >
            Turn Any Website Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Structured Data.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed font-light"
          >
            Zyntrakt is an AI-powered Chrome Extension that automatically analyzes the DOM, generates resilient CSS selectors, and exports clean JSON or Puppeteer scripts. <span className="text-white font-medium">No guesswork.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link 
              href="https://chrome.google.com/webstore" 
              target="_blank"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-neutral-200 transition-all active:scale-95 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              <Download size={20} />
              Install Extension
            </Link>
            <Link 
              href="#demo"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-black border border-white/10 text-white text-lg font-medium rounded-full hover:bg-white/5 hover:border-white/20 transition-all active:scale-95 w-full sm:w-auto"
            >
              View Demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.2 }}
            className="mt-20 relative w-full max-w-6xl mx-auto"
          >
            <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden group ring-1 ring-white/5">
              {/* Fake Browser Header */}
              <div className="flex items-center gap-4 px-4 py-3 border-b border-white/5 bg-white/[0.02] backdrop-blur-md">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-black/40 border border-white/5 text-xs text-neutral-500 font-mono w-full max-w-md text-center">
                    <span className="text-neutral-600">https://</span>
                    <span className="text-white">zyntrakt.ai/demo</span>
                  </div>
                </div>
                <div className="w-16"></div> {/* Spacer */}
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-12 h-[500px] relative">
                
                {/* Left: Website Preview */}
                <div className="md:col-span-8 p-8 relative bg-[#050505] overflow-hidden">
                   {/* Background Grid */}
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                   
                   {/* Mock E-commerce Interface */}
                   <div className="relative z-10 space-y-6">
                      <div className="h-8 w-1/3 bg-neutral-800/50 rounded-lg animate-pulse mb-8" />
                      
                      <div className="grid grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                           <motion.div 
                             key={i}
                             whileHover={{ scale: 1.02 }}
                             className={`p-4 rounded-xl border transition-all duration-300 relative group cursor-pointer ${i === 1 ? 'bg-primary/5 border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'bg-neutral-900/30 border-white/5 hover:border-white/10'}`}
                           >
                             {/* Selector Tag */}
                             {i === 1 && (
                               <div className="absolute -top-3 -right-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg z-20">
                                 .product-card
                               </div>
                             )}

                             <div className="aspect-[4/3] bg-neutral-800/50 rounded-lg mb-4 w-full" />
                             <div className="h-4 w-3/4 bg-neutral-800/50 rounded mb-2" />
                             <div className="h-3 w-1/2 bg-neutral-800/30 rounded" />
                           </motion.div>
                        ))}
                      </div>
                   </div>
                </div>

                {/* Right: Code Output (Glassmorphism Sidebar) */}
                <div className="md:col-span-4 bg-black/80 backdrop-blur-xl border-l border-white/10 p-0 flex flex-col font-mono text-xs relative">
                  {/* Sidebar Header */}
                  <div className="flex items-center gap-4 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Zyntrakt Console</div>
                    <div className="ml-auto flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex border-b border-white/10">
                     <button className="flex-1 py-2 text-center text-white border-b-2 border-primary bg-primary/5">JSON</button>
                     <button className="flex-1 py-2 text-center text-neutral-500 hover:text-white transition-colors">Schema</button>
                     <button className="flex-1 py-2 text-center text-neutral-500 hover:text-white transition-colors">Config</button>
                  </div>
                  
                  {/* Code Area */}
                  <div className="flex-1 p-4 overflow-y-auto custom-scrollbar text-neutral-300 space-y-1">
                    <div className="flex gap-2"><span className="text-purple-400">const</span> <span className="text-blue-400">data</span> <span className="text-white">=</span> <span className="text-yellow-400">await</span> <span className="text-green-400">extract</span>(<span className="text-orange-300">'.product-card'</span>);</div>
                    <div className="text-neutral-500 italic my-2">// Output Preview</div>
                    <div>{`[`}</div>
                    <div className="pl-4">{`{`}</div>
                    <div className="pl-8 flex gap-2"><span className="text-cyan-400">"id"</span>: <span className="text-orange-300">"prod_8821"</span>,</div>
                    <div className="pl-8 flex gap-2"><span className="text-cyan-400">"name"</span>: <span className="text-orange-300">"AI Neural Chip"</span>,</div>
                    <div className="pl-8 flex gap-2"><span className="text-cyan-400">"price"</span>: <span className="text-blue-300">299.00</span>,</div>
                    <div className="pl-8 flex gap-2"><span className="text-cyan-400">"stock"</span>: <span className="text-purple-400">true</span></div>
                    <div className="pl-4">{`},`}</div>
                    <div className="pl-4">{`{`}</div>
                    <div className="pl-8 flex gap-2"><span className="text-cyan-400">"id"</span>: <span className="text-orange-300">"prod_8822"</span>,</div>
                    <div className="pl-8 flex gap-2"><span className="text-cyan-400">"name"</span>: <span className="text-orange-300">"Quantum Core"</span>,</div>
                    <div className="pl-8 flex gap-2"><span className="text-cyan-400">"price"</span>: <span className="text-blue-300">450.00</span>,</div>
                    <div className="pl-8 flex gap-2"><span className="text-cyan-400">"stock"</span>: <span className="text-purple-400">false</span></div>
                    <div className="pl-4">{`}`}</div>
                    <div>{`]`}</div>
                  </div>

                  {/* Status Bar */}
                  <div className="p-2 border-t border-white/10 bg-black text-[10px] flex justify-between text-neutral-500">
                     <span>Latency: 42ms</span>
                     <span>Tokens: 128</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
