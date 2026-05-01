"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const TiltCard = ({ src, alt, delay = 0, className = "" }: { src: string; alt: string; delay?: number; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={`relative group ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-teal-cyan/20 to-deep-purple/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-48 md:h-56 bg-white/95 backdrop-blur-md rounded-[2rem] flex items-center justify-center p-10 shadow-2xl border border-white/20 cursor-pointer overflow-hidden"
      >
        <motion.div
          style={{
            transform: "translateZ(50px)",
          }}
          className="w-full h-full flex items-center justify-center"
        >
          <img 
            src={src} 
            alt={alt} 
            className="max-h-full w-auto object-contain drop-shadow-md" 
          />
        </motion.div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </motion.div>
    </motion.div>
  );
};

export default function MSMEGrid() {
  return (
    <div className="relative">
      {/* Decorative Orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-cyan/5 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-deep-purple/5 blur-[100px] rounded-full animate-pulse" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 relative z-10">
        <TiltCard 
          src="/tubalabs/logos/umayumcha.png" 
          alt="Dimsum Umayumcha" 
          delay={0.1}
          className="md:translate-y-4"
        />
        <TiltCard 
          src="/tubalabs/logos/bolenmanita.png" 
          alt="Bolen Manita" 
          delay={0.2}
          className="md:-translate-y-4"
        />
        <TiltCard 
          src="/tubalabs/logos/ohdough.png" 
          alt="Oh Dough" 
          delay={0.3}
          className="md:translate-y-4"
        />
        <TiltCard 
          src="/tubalabs/logos/caesarprinting.png" 
          alt="Caesar Printing" 
          delay={0.4}
          className="md:-translate-y-4"
        />
      </div>
    </div>
  );
}
