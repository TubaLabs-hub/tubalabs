"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('Navbar');
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <div className="w-10 h-10 glass rounded-lg flex items-center justify-center group-hover:border-teal-cyan/50 transition-colors">
            <span className="text-xl font-bold font-display text-teal-cyan">TL</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight">Tuba Labs</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-teal-cyan/80 -mt-1 font-sans">code that grows</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#services" className="hover:text-teal-cyan transition-colors">{t('services')}</Link>
          <Link href="#portfolio" className="hover:text-teal-cyan transition-colors">{t('portfolio')}</Link>
          <Link href="#about" className="hover:text-teal-cyan transition-colors">{t('about')}</Link>
          <Link href="#contact" className="px-5 py-2 rounded-full glass border-teal-cyan/30 hover:border-teal-cyan hover:bg-teal-cyan/10 transition-all">
            {t('cta')}
          </Link>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-8">
            <Link 
              href="/id" 
              className={`text-xs ${locale === 'id' ? 'text-teal-cyan' : 'text-gray-500'} hover:text-white transition-colors`}
            >
              ID
            </Link>
            <span className="text-gray-700">|</span>
            <Link 
              href="/en" 
              className={`text-xs ${locale === 'en' ? 'text-teal-cyan' : 'text-gray-500'} hover:text-white transition-colors`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
