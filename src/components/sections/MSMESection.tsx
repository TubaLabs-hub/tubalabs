"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import MSMEGrid from "./MSMEGrid";

export default function MSMESection() {
  const t = useTranslations('Index');

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-cyan/5 to-transparent opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50"
            >
              {t('msme_title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-xl mb-12 leading-relaxed max-w-xl"
            >
              {t('msme_desc')}
            </motion.p>
            
            <div className="flex flex-wrap gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col group cursor-pointer"
              >
                <span className="text-4xl md:text-5xl font-bold text-teal-cyan group-hover:scale-110 transition-transform">60+</span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-2 font-mono">Branches Supported</span>
              </motion.div>
              <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-gray-800 to-transparent" />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-col group cursor-pointer"
              >
                <span className="text-4xl md:text-5xl font-bold text-deep-purple group-hover:scale-110 transition-transform">100%</span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-2 font-mono">Scale Readiness</span>
              </motion.div>
            </div>
          </div>

          <MSMEGrid />
        </div>
      </div>
    </section>
  );
}
