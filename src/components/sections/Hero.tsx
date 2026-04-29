"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Globe, Smartphone } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Index');

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-cyan/10 border border-teal-cyan/20 text-teal-cyan text-xs font-mono tracking-widest uppercase mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-cyan"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="px-8 py-4 rounded-full bg-teal-cyan text-primary-navy font-bold flex items-center justify-center gap-2 hover:bg-white transition-all group">
              {t('cta_start')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full glass font-bold hover:bg-white/5 transition-all">
              {t('cta_portfolio')}
            </button>
          </motion.div>
        </div>

        {/* Floating Icons */}
        <div className="hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-0 w-16 h-16 glass rounded-2xl flex items-center justify-center text-teal-cyan"
          >
            <Globe className="w-8 h-8" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-0 w-20 h-20 glass rounded-3xl flex items-center justify-center text-deep-purple"
          >
            <Smartphone className="w-10 h-10" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-10 w-12 h-12 glass rounded-xl flex items-center justify-center text-teal-cyan/50"
          >
            <Cpu className="w-6 h-6" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-deep-purple/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
