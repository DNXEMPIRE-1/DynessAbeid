import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Instagram, MapPin, Globe, MousePointer2, Plus, ArrowUpRight, Sparkles, Wand2 } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
}

const Contact = () => {
  return (
    <div className="w-full bg-transparent overflow-hidden">
      {/* 🎬 ETHEREAL ENGAGEMENT HEADER */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 relative overflow-hidden flex flex-col items-center text-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
           className="relative max-w-6xl pt-20"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[1em] text-yellow-500/80 mb-12 flex items-center justify-center gap-8 italic">
             <Plus size={12} className="" /> Contact Us <Plus size={12} className="" />
          </span>
          <h1 className="text-[14vw] md:text-[11vw] font-display uppercase leading-[0.8] tracking-tighter italic mix-blend-exclusion mb-12">
             Get in <br /> <span className="text-yellow-500 font-serif not-italic  uppercase">Touch.</span>
          </h1>
        </motion.div>
        
        <p className="max-w-4xl mt-24 text-2xl md:text-4xl font-serif italic text-yellow-500/60 leading-relaxed font-light mx-auto border-x border-gold/10 px-16 opacity-80 uppercase tracking-widest">
          We prioritize strategic institutional engagements with a <span className="text-yellow-500 font-bold">creative soul.</span> Let's weave your next visual legacy.
        </p>

        {/* Background Atmosphere */}
        <div className="absolute top-[75%] left-1/2 -translate-x-1/2 size-[60vw] bg-gold/5 blur-[350px] rounded-full -z-10" />
      </section>

      {/* 💎 ARTISAN CONTACT GRID & FORM */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 relative z-10 bg-brown/40 backdrop-blur-md">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-start relative isolate">
            
            <div className="space-y-20">
               <div className="space-y-12">
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.8em] text-yellow-500/60 group flex items-center gap-6">
                     <span className="h-[1px] bg-gold/20 w-12" /> Contact Info
                  </h2>
                  <div className="space-y-16 backdrop-blur-3xl p-16 glass-card rounded-[100px] border-gold/10 bg-charcoal/[0.01]">
                     <div className="flex flex-col gap-16">
                        <div className="flex items-center gap-12 group cursor-pointer interactive" data-cursor="DIRECT">
                           <div className="size-24 rounded-full border border-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-black group-hover:scale-110 transition-all duration-700">
                              <Mail size={32} strokeWidth={1} />
                           </div>
                           <div className="space-y-4">
                              <span className="text-[10px] font-bold uppercase tracking-[0.5em]  italic font-serif">Email</span>
                              <h4 className="text-3xl md:text-4xl font-display uppercase hover:text-yellow-500 transition-colors duration-700 leading-none">hello@dyness.pro</h4>
                           </div>
                        </div>
                        <div className="flex items-center gap-12 group cursor-pointer interactive" data-cursor="INSIGHT">
                           <div className="size-24 rounded-full border border-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-black group-hover:scale-110 transition-all duration-700">
                              <Instagram size={32} strokeWidth={1} />
                           </div>
                           <div className="space-y-4">
                              <span className="text-[10px] font-bold uppercase tracking-[0.5em]  italic font-serif">Instagram</span>
                              <h4 className="text-3xl md:text-4xl font-display uppercase hover:text-yellow-500 transition-colors duration-700 leading-none">@dyness_studio</h4>
                           </div>
                        </div>
                        <div className="flex items-center gap-12 group cursor-pointer interactive" data-cursor="MARK">
                           <div className="size-24 rounded-full border border-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-black group-hover:scale-110 transition-all duration-700">
                              <MapPin size={32} strokeWidth={1} />
                           </div>
                           <div className="space-y-4">
                              <span className="text-[10px] font-bold uppercase tracking-[0.5em]  italic font-serif">Location</span>
                              <h4 className="text-3xl md:text-4xl font-display uppercase hover:text-yellow-500 transition-colors duration-700 leading-none">TZ | KE | Regional</h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="glass-card p-12 rounded-[60px] border-gold/10 border-dashed bg-transparent text-center">
                  <h5 className="text-[10px] font-bold uppercase tracking-[1em]  mb-8 font-serif italic">Availability: Booking for 2026</h5>
                  <div className="flex items-center justify-center gap-8 text-xs font-bold uppercase tracking-[0.5em] text-yellow-500 animate-pulse">
                     <Sparkles size={16} /> Open for Projects
                  </div>
               </div>
            </div>

            <motion.div 
               {...fadeUp}
               className="glass-card p-16 md:p-24 rounded-[120px] border-gold/5 space-y-24 bg-white/[0.01] relative overflow-hidden"
            >
               <div className="space-y-6">
                  <h3 className="text-5xl md:text-7xl font-display uppercase italic leading-none ">The <br /> <span className=" font-serif not-italic  uppercase tracking-tight">Vision.</span></h3>
                  <p className=" font-serif italic text-xl">Tell us about your project...</p>
               </div>
               <form className="space-y-20">
                  <div className="space-y-8">
                     <label className="text-[10px] font-bold uppercase tracking-[1em]  italic font-serif">Your Name / Organization</label>
                      <input type="text" placeholder="Full Name / Organization" className="w-full bg-transparent border-b border-gold/20 py-8 outline-none focus:border-gold transition-all duration-700 text-3xl font-serif italic  placeholder:" />
                  </div>
                  <div className="space-y-8">
                     <label className="text-[10px] font-bold uppercase tracking-[1em]  italic font-serif">Project Details</label>
                      <textarea rows="4" placeholder="Tell us more about what you need..." className="w-full bg-transparent border-b border-gold/20 py-8 outline-none focus:border-gold transition-all duration-700 text-3xl font-serif italic  resize-none placeholder:" />
                  </div>
                   <button className="w-full bg-gold text-white py-12 rounded-full font-display uppercase tracking-widest text-[14px] hover:bg-brown/40 transition-all duration-700 shadow-[0_50px_100px_rgba(197,163,99,0.2)] flex items-center justify-between px-20 group interactive overflow-hidden relative" data-cursor="SEND">
                     <span className="relative z-10">Send Message</span>
                     <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-700 relative z-10" size={32} strokeWidth={1} />
                  </button>
               </form>
               {/* Decorative Backgroundmark */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[20vw] font-serif italic -rotate-12 pointer-events-none select-none">Soul.</div>
            </motion.div>
         </div>
      </section>

      {/* 🌏 REGIONAL FOOTER PASSAGE */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 bg-brown border-t border-cream/10 text-center">
         <div className="max-w-4xl mx-auto space-y-16">
            <h5 className="text-[11px] font-bold uppercase tracking-[1.5em] text-yellow-500/60 italic">Based in East Africa</h5>
            <p className="text-2xl md:text-3xl font-serif italic /40 leading-relaxed font-light font-light uppercase tracking-widest">
               Serving NGOs, Institutional Leaders, and Innovative Brands across Tanzania, Kenya, and the wider regional block.
            </p>
         </div>
      </section>
    </div>
  )
}

export default Contact
