"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Users, Code, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Expert Developers",
    description: "Tim pengembang senior dengan pengalaman menangani sistem enterprise berskala nasional.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Scalable Architecture",
    description: "Kami membangun sistem yang siap berkembang seiring pertumbuhan bisnis Anda (code that grows).",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Enterprise Standards",
    description: "Keamanan, performa, dan dokumentasi mengikuti standar industri perusahaan besar.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Modern Tech Stack",
    description: "Menggunakan teknologi terbaru untuk memastikan kecepatan dan kemudahan pemeliharaan.",
    icon: <Code className="w-6 h-6" />,
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-deep-purple font-mono text-sm tracking-widest uppercase">Why Tuba Labs</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Partner Teknologi yang <br />
                <span className="text-gradient">Tumbuh Bersama Anda.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Kami tidak sekadar menulis kode. Kami merancang solusi bisnis yang strategis, mulai dari skalabilitas startup hingga keandalan infrastruktur enterprise.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-cyan/10 flex items-center justify-center text-teal-cyan">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass aspect-square rounded-[4rem] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-cyan/10 to-deep-purple/10" />
              {/* Abstract Code Illustration */}
              <div className="p-12 w-full space-y-4 font-mono text-xs text-teal-cyan/50">
                <p>const tubaLabs = {"{"}</p>
                <p className="pl-4">vision: "code that grows",</p>
                <p className="pl-4">scalability: true,</p>
                <p className="pl-4">innovation: "continuous",</p>
                <p className="pl-4">partners: ["Enterprise", "MSME"],</p>
                <p className="pl-4">impact: () =&gt; {"{"}</p>
                <p className="pl-8 text-teal-cyan">return "Sustainable Growth";</p>
                <p className="pl-4">{"}"}</p>
                <p>{"}"};</p>
                
                <div className="pt-8 space-y-2 opacity-30">
                  <div className="h-2 w-full bg-teal-cyan/20 rounded-full" />
                  <div className="h-2 w-3/4 bg-teal-cyan/20 rounded-full" />
                  <div className="h-2 w-5/6 bg-teal-cyan/20 rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-deep-purple/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-cyan/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
