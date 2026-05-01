"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const projects = [
  {
    id: "rasasayang",
    titleKey: "portfolio_rasasayang",
    descKey: "portfolio_rasasayang_desc",
    category: "Web & Mobile App",
    tags: ["Sales", "Accounting", "Enterprise"],
    image: "/tubalabs/logos/umayumcha.png", // Using existing logos as placeholders
    color: "from-teal-cyan/20 to-deep-purple/20",
    noInitialInvert: true,
  },
  {
    id: "inventory",
    titleKey: "portfolio_inventory",
    descKey: "portfolio_inventory_desc",
    category: "Mobile App",
    tags: ["Inventory", "Logistics", "Management"],
    image: "/tubalabs/logos/umayumcha.png",
    color: "from-deep-purple/20 to-blue-500/20",
    noInitialInvert: true,
  },
  {
    id: "ohdough",
    titleKey: "portfolio_ohdough",
    descKey: "portfolio_ohdough_desc",
    category: "Website",
    tags: ["E-commerce", "Food & Beverage", "Premium"],
    image: "/tubalabs/logos/ohdough.png",
    color: "from-teal-cyan/20 to-blue-500/20",
  },
  {
    id: "bolen",
    titleKey: "portfolio_bolen",
    descKey: "portfolio_bolen_desc",
    category: "Website",
    tags: ["Branding", "Bakery", "Surabaya"],
    image: "/tubalabs/logos/bolenmanita.png",
    color: "from-orange-500/10 to-deep-purple/20",
  },
  {
    id: "caesar",
    titleKey: "portfolio_caesar",
    descKey: "portfolio_caesar_desc",
    category: "Website",
    tags: ["Printing", "Business", "Bontang"],
    image: "/tubalabs/logos/caesarprinting.png",
    color: "from-blue-600/10 to-teal-cyan/20",
  },
];

export default function Portfolio() {
  const t = useTranslations("Index");

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-cyan/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-deep-purple/5 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-cyan font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {t("portfolio_title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            {t("portfolio_subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl`} />
              
              <div className="relative glass rounded-[2.5rem] overflow-hidden border-white/5 group-hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                {/* Image/Mockup area */}
                <div className="h-64 relative overflow-hidden bg-white/[0.03] group-hover:bg-slate-200 transition-all duration-700 flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className={`max-h-full w-auto object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 group-hover:drop-shadow-2xl ${
                      project.noInitialInvert ? "" : "brightness-0 invert"
                    } group-hover:brightness-100 group-hover:invert-0 opacity-40 group-hover:opacity-100`}
                  />
                  
                  {/* Category Tag Overlay */}
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 rounded-full glass text-[10px] font-bold uppercase tracking-widest text-teal-cyan">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-gray-500 group-hover:text-teal-cyan/70 transition-colors">#{tag}</span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-white transition-colors">
                    {t(project.titleKey)}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(project.descKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
