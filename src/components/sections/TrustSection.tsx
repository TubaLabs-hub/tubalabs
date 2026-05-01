"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function TrustSection() {
  const t = useTranslations('Index');

  return (
    <section className="py-32 relative z-10 group/trust">
      {/* Dynamic Background Glow - much brighter */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.1] to-transparent opacity-0 group-hover/trust:opacity-100 transition-all duration-1000" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-teal-cyan/30 to-transparent opacity-0 group-hover/trust:opacity-100 transition-all duration-1000" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-12">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            className="text-teal-cyan font-mono text-xs tracking-[0.4em] uppercase"
          >
            {t('trust')}
          </motion.p>
          
          <div className="w-full relative py-12 px-12 rounded-[4rem] transition-all duration-700 group-hover/trust:bg-slate-200/90 group-hover/trust:backdrop-blur-xl group-hover/trust:shadow-[0_0_80px_rgba(255,255,255,0.08)]">
            <div className="flex flex-wrap gap-12 md:gap-24 items-center justify-center transition-all duration-700">
              <img src="/tubalabs/logos/medco.png" alt="Medco" className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale brightness-0 invert group-hover/trust:opacity-100 group-hover/trust:grayscale-0 group-hover/trust:brightness-100 group-hover/trust:invert-0 transition-all duration-500 hover:scale-110" />
              <img src="/tubalabs/logos/telkomsel.png" alt="Telkomsel" className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale brightness-0 invert group-hover/trust:opacity-100 group-hover/trust:grayscale-0 group-hover/trust:brightness-100 group-hover/trust:invert-0 transition-all duration-500 hover:scale-110" />
              <img src="/tubalabs/logos/pertamina.png" alt="Pertamina" className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale brightness-0 invert group-hover/trust:opacity-100 group-hover/trust:grayscale-0 group-hover/trust:brightness-100 group-hover/trust:invert-0 transition-all duration-500 hover:scale-110" />
              <img src="/tubalabs/logos/pelindo.png" alt="Pelindo" className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale brightness-0 invert group-hover/trust:opacity-100 group-hover/trust:grayscale-0 group-hover/trust:brightness-100 group-hover/trust:invert-0 transition-all duration-500 hover:scale-110" />
              <img src="/tubalabs/logos/garuda.png" alt="Garuda Indonesia" className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale brightness-0 invert group-hover/trust:opacity-100 group-hover/trust:grayscale-0 group-hover/trust:brightness-100 group-hover/trust:invert-0 transition-all duration-500 hover:scale-110" />
              <img src="/tubalabs/logos/mandiri.png" alt="Bank Mandiri" className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale brightness-0 invert group-hover/trust:opacity-100 group-hover/trust:grayscale-0 group-hover/trust:brightness-100 group-hover/trust:invert-0 transition-all duration-500 hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
