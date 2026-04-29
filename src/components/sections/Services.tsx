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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass p-8 rounded-3xl relative group overflow-hidden ${service.className}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-teal-cyan mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none">
                <Code2 className="w-32 h-32" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
