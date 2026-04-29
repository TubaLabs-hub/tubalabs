"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Enterprise Client",
    role: "Project Manager @ Medco",
    content: "Tuba Labs memberikan solusi yang sangat teknis namun mudah dikelola. Skalabilitas sistem mereka membantu kami menangani beban kerja yang dinamis.",
    type: "Enterprise"
  },
  {
    name: "Owner",
    role: "Dimsum Umayumcha",
    content: "Dari 1 cabang hingga 60+ cabang, Tuba Labs selalu ada mendukung infrastruktur digital kami. Sistem mereka benar-benar tumbuh bersama kami.",
    type: "MSME"
  },
  {
    name: "Tech Lead",
    role: "Bank Mandiri Innovation Lab",
    content: "Profesionalisme dan kedalaman teknis developer Tuba Labs setara dengan standar internasional. Sangat merekomendasikan untuk proyek kompleks.",
    type: "Enterprise"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-deep-purple font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            What Our <span className="text-gradient">Partners Say.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col justify-between group hover:border-teal-cyan/50 transition-all duration-500"
            >
              <div>
                <Quote className="w-10 h-10 text-teal-cyan/20 mb-6 group-hover:text-teal-cyan/40 transition-colors" />
                <p className="text-gray-300 italic mb-8 leading-relaxed">
                  "{item.content}"
                </p>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">{item.name}</span>
                <span className="text-sm text-gray-500">{item.role}</span>
                <span className={`mt-4 text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded border inline-block w-fit ${
                  item.type === 'Enterprise' ? 'border-teal-cyan/30 text-teal-cyan' : 'border-deep-purple/30 text-deep-purple'
                }`}>
                  {item.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
