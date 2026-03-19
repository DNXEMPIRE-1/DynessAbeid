import React from 'react'
import { motion } from 'framer-motion'
import { Plus, Globe, Award, Target, Layout, Presentation, Palette, ArrowUpRight, MousePointer2, Wand2 } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
}

const reveal = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
}

const About = () => {
  return (
    <div className="w-full bg-transparent overflow-hidden">
      {/* 🎬 ARTISTIC NARRATIVE HEADER */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 relative overflow-hidden flex flex-col items-center text-center">
        <motion.div 
           {...reveal}
           className="relative max-w-6xl pt-20"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[1em] text-yellow-500/80 mb-12 flex items-center justify-center gap-8 italic">
             <Plus size={12} className="" /> About Dyness <Plus size={12} className="" />
          </span>
          <h1 className="text-[12vw] md:text-[9vw] font-display uppercase leading-[0.8] tracking-tighter italic mix-blend-exclusion mb-12">
             Our <br /> <span className="text-yellow-500 font-serif not-italic  uppercase">Core.</span>
          </h1>
          <p className="max-w-4xl mt-12 text-2xl md:text-4xl font-serif italic /60 leading-relaxed font-light mx-auto border-x border-gold/20 px-12 uppercase tracking-wide">
             We combine <span className="text-yellow-500 font-bold">strategic thinking</span> with <span className="text-yellow-500 font-bold">creative design.</span>
          </p>
        </motion.div>
        
        {/* Background Visual Watermark */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02]">
           <span className="text-[35vw] font-serif font-black italic whitespace-nowrap select-none">Atelier.</span>
        </div>
      </section>

      {/* 🔮 ETHEREAL PHILOSOPHY */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 relative z-10 bg-brown/40 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div {...fadeUp} className="space-y-16">
               <h2 className="text-[11px] font-bold uppercase tracking-[0.6em] text-yellow-500/60 group flex items-center gap-6">
                  <span className="h-[1px] bg-gold/40 w-16" /> Our Philosophy
               </h2>
               <div className="space-y-12">
                  <div className="space-y-6 group cursor-pointer interactive" data-cursor="ART">
                     <h3 className="text-5xl md:text-7xl font-display uppercase leading-none italic group-hover:text-yellow-500 transition-colors duration-700">Strategic <br /> <span className="">Design.</span></h3>
                     <p className="text-xl md:text-2xl leading-relaxed  font-serif italic max-w-lg group-hover:opacity-80 transition-opacity duration-700">
                        Every creative decision is an investment in clarity. We weave complex data into seamless visual narratives that command attention.
                     </p>
                  </div>
                  <div className="w-full h-px bg-charcoal/10 shadow-2xl" />
                  <div className="space-y-6 group cursor-pointer interactive" data-cursor="SOUL">
                     <h3 className="text-5xl md:text-7xl font-display uppercase leading-none italic group-hover:text-yellow-500 transition-colors duration-700">Design <br /> <span className="">Integrity.</span></h3>
                     <p className="text-xl md:text-2xl leading-relaxed  font-serif italic max-w-lg group-hover:opacity-80 transition-opacity duration-700">
                        The NGO sector demands trust. I provide a visual language of prestige and professionalism, infused with a unique creative soul.
                     </p>
                  </div>
               </div>
            </motion.div>
            
            <motion.div 
               {...reveal}
               className="relative glass-card p-16 md:p-24 rounded-[100px] border-gold/10 flex flex-col justify-center overflow-hidden"
            >
               <div className="size-24 rounded-full bg-gold/5 flex items-center justify-center text-yellow-500/60 mb-12 border border-gold/10">
                  <Wand2 size={40} strokeWidth={1} />
               </div>
                <p className="text-2xl md:text-3xl font-serif italic /80 leading-relaxed font-light border-l-2 border-gold/40 pl-12">
                  "I specialize in the alchemy of information—transforming rigid data into fluid, beautiful, and donor-ready documents."
               </p>
               <div className="pt-20 flex flex-wrap gap-6">
                  {['Artistic Polish', 'Design Logic', 'Custom Strategy', 'East African Vision'].map((tag, i) => (
                     <span key={i} className="text-[10px] font-bold uppercase tracking-[0.3em] px-8 py-4 border border-charcoal/10 rounded-full hover:opacity-100 hover:border-gold hover:text-yellow-500 transition-all duration-700 cursor-default">{tag}</span>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* 🌏 REGIONAL FOOTPRINT - Artistic Perspective */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 relative overflow-hidden bg-brown/50">
         <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center space-y-8">
               <span className="text-[10px] font-bold uppercase tracking-[1.5em] text-yellow-500/60 animate-pulse italic block">Author Perspective</span>
               <h3 className="text-5xl md:text-[10vw] font-display uppercase tracking-tighter leading-none italic">Regional <br /> <span className="text-yellow-500 font-serif not-italic  uppercase">Expertise.</span></h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               {[
                  { label: "Vision", val: "Authentic Design", desc: "A visual language built for trust and clarity." },
                  { label: "Borders", val: "TZ | KE | EA", desc: "Crafting narratives that resonate across East Africa." },
                  { label: "Quality", val: "Professional", desc: "Clear presentation backed by strategic logic." }
               ].map((item, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -20, scale: 1.02 }}
                     className="group p-16 glass-card rounded-[80px] h-[450px] flex flex-col justify-between hover:bg-gold/5 transition-all duration-1000 border-gold/5"
                  >
                      <div className="size-16 rounded-full border border-gold/20 flex items-center justify-center text-yellow-500/40 group-hover:bg-gold group-hover:text-white transition-all duration-700">
                        <Globe size={32} strokeWidth={1} />
                     </div>
                     <div className="space-y-6">
                        <span className="text-[10px] font-bold uppercase tracking-widest  italic font-serif group-hover:text-yellow-500 transition-colors">{item.label}</span>
                        <h4 className="text-4xl font-display leading-[0.9] tracking-tighter group-hover:text-yellow-500 transition-all duration-700 italic">{item.val}</h4>
                        <p className="text-[13px]  group-hover:opacity-100 transition-all duration-700 font-serif italic leading-loose ">{item.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 💎 SIGNATURE CTA - Engage the Artist */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 text-center bg-brown">
         <div className="max-w-4xl mx-auto space-y-20 py-20 relative isolate">
             <h4 className="text-[11px] font-bold uppercase tracking-[1.5em] text-yellow-500/60 italic">Our Work</h4>
            <h4 className="text-6xl md:text-[11vw] font-display italic leading-none tracking-tighter mix-blend-exclusion">Let's Build your <br /> <span className="text-yellow-500 font-serif not-italic  uppercase">Project.</span></h4>
            <div className="pt-16">
               <a href="/contact" className="group bg-gold text-white px-24 py-12 rounded-full font-display uppercase tracking-widest text-[14px] hover:bg-brown/40 transition-all duration-700 interactive flex items-center justify-center gap-10 mx-auto w-fit shadow-[0_0_100px_rgba(197,163,99,0.2)]">
                  Start a Project <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-700" size={24} strokeWidth={1} />
               </a>
            </div>
            {/* Background Texture Overlay */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none -z-10 text-[30vw] font-serif font-black italic select-none">Contact.</div>
         </div>
      </section>
    </div>
  )
}

export default About
