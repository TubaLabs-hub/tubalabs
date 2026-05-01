import Navbar from "@/components/layout/Navbar";
import BinaryBackground from "@/components/ui/BinaryBackground";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ValueProposition from "@/components/sections/ValueProposition";
import MSMESection from "@/components/sections/MSMESection";
import Testimonials from "@/components/sections/Testimonials";
import TrustSection from "@/components/sections/TrustSection";
import {setRequestLocale, getTranslations} from 'next-intl/server';

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Index');

  return (
    <main className="relative min-h-screen">
      <BinaryBackground />
      <Navbar />
      <Hero />
      
      <TrustSection />

      <ValueProposition />
      
      <Services />

      <MSMESection />

      <Testimonials />

      {/* Contact CTA */}
      <section id="contact" className="pt-32 pb-48 container mx-auto px-6 text-center relative z-20 group">
        <div className="max-w-4xl mx-auto glass p-16 rounded-[3rem] border-teal-cyan/20 space-y-10 relative overflow-hidden transition-all duration-700 group-hover:border-teal-cyan/50 group-hover:shadow-[0_0_80px_rgba(45,212,191,0.15)] group-hover:bg-white/[0.05]">
          {/* Main Hover Glows */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-cyan/15 to-deep-purple/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 space-y-8 transform transition-transform duration-700 group-hover:scale-[1.01]">
            <h2 className="text-5xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Siap Membangun Masa Depan Digital Anda?
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto group-hover:text-gray-300 transition-colors">
              Konsultasikan kebutuhan teknologi bisnis Anda dengan tim ahli kami secara gratis. Mari tumbuh bersama.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <a 
                href="https://wa.me/6281359867259" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-full bg-white text-primary-navy font-bold text-lg hover:bg-teal-cyan hover:scale-105 transition-all shadow-[0_0_40px_rgba(45,212,191,0.3)] flex items-center justify-center"
              >
                Hubungi via WhatsApp
              </a>
              <a 
                href="mailto:hello@tubalabs.com"
                className="px-10 py-5 rounded-full glass font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all flex items-center justify-center"
              >
                Kirim Email
              </a>
            </div>
          </div>
          
          {/* Floating Decorative Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-cyan/10 blur-[100px] -mr-40 -mt-40 opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-purple/10 blur-[100px] -ml-40 -mb-40 opacity-0 group-hover:opacity-100 transition-all duration-700" />
          
          {/* Central Bottom Glow Fix */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-teal-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
        </div>
      </section>

      <footer className="py-24 border-t border-white/5 relative z-10 bg-primary-navy/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1 space-y-6">
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight">Tuba Labs</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-teal-cyan/80 font-sans">code that grows</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Membangun solusi digital skalabel untuk Enterprise dan UMKM di seluruh Indonesia.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-teal-cyan transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-teal-cyan transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-teal-cyan transition-colors">AI Solutions</a></li>
                <li><a href="#" className="hover:text-teal-cyan transition-colors">Cloud Strategy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-teal-cyan transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-teal-cyan transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-teal-cyan transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-teal-cyan transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>Email: hello@tubalabs.com</li>
                <li>Phone: +62 812-3456-7890</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 text-xs font-mono">
              &copy; {new Date().getFullYear()} Tuba Labs. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-teal-cyan transition-colors">Twitter</a>
              <a href="#" className="hover:text-teal-cyan transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-teal-cyan transition-colors">Github</a>
              <a href="#" className="hover:text-teal-cyan transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
