"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, BrainCircuit, Code2, Rocket, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Web App Development",
    description: "Membangun platform web yang skalabel dan performa tinggi menggunakan Next.js dan ekosistem modern.",
    icon: <Globe className="w-8 h-8" />,
    className: "md:col-span-2 md:row-span-1",
    color: "from-teal-cyan/20 to-teal-cyan/5",
  },
  {
    title: "Mobile App Development",
    description: "Solusi aplikasi native dan cross-platform (iOS & Android) yang responsif dan user-friendly.",
    icon: <Smartphone className="w-8 h-8" />,
    className: "md:col-span-1 md:row-span-2",
    color: "from-deep-purple/20 to-deep-purple/5",
  },
  {
    title: "AI-Powered Solutions",
    description: "Integrasi kecerdasan buatan untuk otomatisasi bisnis dan analisis data cerdas.",
    icon: <BrainCircuit className="w-8 h-8" />,
    className: "md:col-span-1 md:row-span-1",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Digital Transformation",
    description: "Membantu perusahaan bermigrasi ke ekosistem digital yang efisien dan modern.",
    icon: <Rocket className="w-8 h-8" />,
    className: "md:col-span-2 md:row-span-1",
    color: "from-teal-cyan/20 to-deep-purple/20",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-teal-cyan font-mono text-sm tracking-widest uppercase mb-4"
          >
            Our expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Digital Solutions for <br />
            <span className="text-gradient">Modern Businesses.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-full">
          {/* Web Development - Big Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 glass p-10 rounded-[2.5rem] relative group overflow-hidden border-white/5 hover:border-teal-cyan/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-teal-cyan/10 flex items-center justify-center text-teal-cyan mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Web App Development</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Membangun platform web yang skalabel dan performa tinggi menggunakan Next.js dan ekosistem modern.
                </p>
              </div>
            </div>
            <div className="absolute bottom-[-20%] right-[-10%] opacity-5 group-hover:opacity-10 transition-all duration-700 rotate-12 group-hover:rotate-0">
              <Code2 className="w-64 h-64 text-teal-cyan" />
            </div>
          </motion.div>

          {/* Mobile Development - Tall Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 glass p-10 rounded-[2.5rem] relative group overflow-hidden border-white/5 hover:border-deep-purple/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-deep-purple/10 flex items-center justify-center text-deep-purple mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-6">Mobile App Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Solusi aplikasi native dan cross-platform (iOS & Android) yang responsif dan user-friendly. Kami fokus pada performa dan UX terbaik.
              </p>
            </div>
          </motion.div>

          {/* AI Solutions - Small Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 md:row-span-1 glass p-10 rounded-[2.5rem] relative group overflow-hidden border-white/5 hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-all duration-500">
                <BrainCircuit className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">AI Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Integrasi kecerdasan buatan untuk otomatisasi bisnis dan analisis data cerdas.
              </p>
            </div>
          </motion.div>

          {/* Digital Transformation - Horizontal Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 glass p-10 rounded-[2.5rem] relative group overflow-hidden border-white/5 hover:border-teal-cyan/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-cyan/10 via-deep-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-teal-cyan mb-6 group-hover:scale-110 transition-all duration-500">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Digital Transformation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Migrasi ke ekosistem digital yang efisien dan modern.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
