'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import { clsx } from 'clsx';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'For hobbyists and testing.',
      features: [
        { name: '50 extractions / month', included: true },
        { name: 'Standard DOM analysis', included: true },
        { name: 'JSON & CSV export', included: true },
        { name: 'Community support', included: true },
        { name: 'Puppeteer export', included: false },
        { name: 'Cloud sync', included: false }
      ],
      cta: 'Install Free',
      popular: false
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? '$29' : '$290',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      description: 'For professionals and data teams.',
      features: [
        { name: 'Unlimited extractions', included: true },
        { name: 'Advanced AI selectors', included: true },
        { name: 'Puppeteer & Playwright export', included: true },
        { name: 'Priority email support', included: true },
        { name: 'Cloud sync', included: true },
        { name: 'API Access', included: false }
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Team',
      price: billingCycle === 'monthly' ? '$99' : '$990',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      description: 'For agencies and scaling operations.',
      features: [
        { name: '5 Team seats', included: true },
        { name: 'Shared schema library', included: true },
        { name: 'API Access', included: true },
        { name: 'Dedicated success manager', included: true },
        { name: 'SLA', included: true },
        { name: 'Custom Integrations', included: true }
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-black relative">
       {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Simple Pricing</h2>
          <p className="text-neutral-400 text-lg mb-8">Start for free. Scale when you need to.</p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={clsx("text-sm font-medium transition-colors", billingCycle === 'monthly' ? "text-white" : "text-neutral-500")}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 rounded-full bg-white/10 p-1 relative transition-colors hover:bg-white/20"
            >
              <motion.div 
                className="w-6 h-6 rounded-full bg-primary shadow-sm"
                animate={{ x: billingCycle === 'monthly' ? 0 : 24 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={clsx("text-sm font-medium transition-colors", billingCycle === 'yearly' ? "text-white" : "text-neutral-500")}>Yearly <span className="text-primary text-xs ml-1 font-bold">(-20%)</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={clsx(
                "relative p-8 rounded-2xl border flex flex-col transition-all duration-300",
                plan.popular 
                  ? "bg-neutral-900/50 border-primary shadow-[0_0_40px_rgba(59,130,246,0.1)] scale-105 z-10" 
                  : "bg-black border-white/10 hover:border-white/20"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-lg border border-white/10">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                 <h3 className="text-lg font-medium text-neutral-400 mb-2">{plan.name}</h3>
                 <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                   {plan.price !== '$0' && <span className="text-neutral-500">{plan.period}</span>}
                 </div>
                 <p className="text-sm text-neutral-500 mt-4">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className={clsx("flex items-start gap-3 text-sm", feature.included ? "text-neutral-300" : "text-neutral-700")}>
                    {feature.included ? (
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    ) : (
                      <X size={16} className="text-neutral-800 mt-0.5 shrink-0" />
                    )}
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="#"
                className={clsx(
                  "w-full py-4 rounded-xl font-bold text-center transition-all text-sm tracking-wide",
                  plan.popular 
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25" 
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                )}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
