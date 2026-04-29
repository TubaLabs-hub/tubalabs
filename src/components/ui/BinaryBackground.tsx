"use client";

import { useEffect, useState } from "react";

export default function BinaryBackground() {
  const [opacity, setOpacity] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setOpacity(0.05);
  }, []);

  if (!isMounted) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none select-none overflow-hidden font-mono text-[10px] leading-none"
      style={{ opacity, transition: "opacity 2s ease-in-out" }}
    >
      <div className="flex flex-wrap gap-2 w-[120%] -ml-[10%]">
        {Array.from({ length: 2000 }).map((_, i) => (
          <span key={i} className="text-teal-cyan/20">
            {Math.round(Math.random())}
          </span>
        ))}
      </div>
    </div>
  );
}
