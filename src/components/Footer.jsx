import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, MapPin, Globe, ArrowUpRight, Plus, MousePointer2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="relative min-h-screen py-40 px-6 md:px-20 lg:px-32 z-10 flex flex-col justify-between items-center bg-cream text-center  overflow-hidden border-t border-charcoal/10">
      
      {/* Editorial Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
         <span className="text-[35vw] font-serif font-black italic transform -rotate-12 whitespace-nowrap select-none">Impact.</span>
      </div>

      <div className="relative z-10 max-w-5xl flex flex-col items-center space-y-24">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
         >
            <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-yellow-500 animate-pulse flex items-center justify-center gap-4">
               <Plus size={10} /> Initiate Interaction <Plus size={10} />
            </span>
            <a href="mailto:hello@dyness.pro" className="group text-5xl md:text-[10vw] font-serif italic font-black leading-none tracking-tighter hover:text-yellow-500 transition-colors interactive flex items-center gap-8" data-cursor="WRITE">
               hello@dyness.pro
               <div className="hidden lg:flex size-24 rounded-full border border-gold/20 items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                  <ArrowUpRight size={40} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </div>
            </a>
            <p className="text-lg md:text-xl font-serif italic text-yellow-500/40 mt-12 max-w-xl mx-auto border-l border-gold/10 pl-8">
               Consulting on visual positioning and institutional strategy for regional and international NGO partners.
            </p>
         </motion.div>

         <div className="w-full h-px bg-charcoal/10" />

         <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full text-left">
            <div className="space-y-8">
               <h5 className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 ">Regional Presence</h5>
               <div className="flex flex-col gap-4 font-serif italic text-3xl font-black">
                  <p className="hover:text-yellow-500 transition-colors cursor-pointer">Dar Es Salaam, TZ</p>
                  <p className="hover:text-yellow-500 transition-colors cursor-pointer">Nairobi, KE</p>
                  <p className="">East African Region</p>
               </div>
            </div>

            <div className="space-y-8">
               <h5 className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 ">Digital Extension</h5>
               <div className="flex flex-col gap-6 text-[11px] font-bold tracking-[0.3em] uppercase">
                  <a href="#" className="flex items-center gap-4 hover:text-yellow-500 transition-colors interactive group">
                     <Instagram size={14} className=" group-hover:opacity-100" /> @dyness_studio
                  </a>
                  <a href="#" className="flex items-center gap-4 hover:text-yellow-500 transition-colors interactive group">
                     <Globe size={14} className=" group-hover:opacity-100" /> LinkedIn Professional
                  </a>
                  <a href="#" className="flex items-center gap-4 hover:text-yellow-500 transition-colors interactive group">
                     <MousePointer2 size={14} className=" group-hover:opacity-100" /> Behance Showcase
                  </a>
               </div>
            </div>

            <div className="space-y-8 md:text-right">
               <h5 className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 ">Authentic Strategy</h5>
               <div className="text-[10px] font-bold tracking-[0.2em] uppercase space-y-4">
                  <p className=" italic font-serif">© 2026 Dyness Kazala</p>
                  <p className=" italic font-serif">Visual Communication Designer & Creative Consultant</p>
                 
               </div>
            </div>
         </div>
      </div>
      
      {/* Cinematic Pulse */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 size-[65vw] bg-gold/5 blur-[250px] rounded-full opacity-50 pointer-events-none" />
    </footer>
  )
}

export default Footer
