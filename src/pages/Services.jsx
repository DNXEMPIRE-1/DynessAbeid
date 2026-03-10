import React from 'react'
import { motion } from 'framer-motion'
import { Presentation, Layout, MonitorPlay, Palette, Camera, Clapperboard, Award, Target, Plus, ArrowUpRight, MousePointer2, Sparkles, Wand2 } from 'lucide-react'
import { Link } from 'react-router-dom'

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

const Services = () => {
  return (
    <div className="w-full bg-transparent overflow-hidden">
      {/* 🔮 ETHEREAL OFFERINGS HEADER */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 relative overflow-hidden flex flex-col items-center text-center">
        <motion.div 
           {...reveal}
           className="relative max-w-6xl pt-20"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[1em] text-gold/80 mb-12 flex items-center justify-center gap-8 italic">
             <Sparkles size={14} className="opacity-40" /> Creative Offerings <Sparkles size={14} className="opacity-40" />
          </span>
          <h1 className="text-[12vw] md:text-[10vw] font-display uppercase leading-[0.8] tracking-tighter italic mix-blend-exclusion mb-12">
             Artisan <br /> <span className="text-gold font-serif not-italic text-outline uppercase">Verticals.</span>
          </h1>
          <p className="max-w-4xl mt-24 text-2xl md:text-3xl font-serif italic text-charcoal/60 leading-relaxed font-light mx-auto border-x border-gold/20 px-16 uppercase tracking-widest">
             Ensuring your institutional visual language commands regional authority through <span className="text-gold font-bold">bespoke artistic excellence.</span>
          </p>
        </motion.div>
        
        {/* Background Visual Element */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 size-[65vw] bg-gold/5 blur-[300px] rounded-full pointer-events-none -z-10" />
      </section>

      {/* 💎 PRIMARY ARTISAN VERTICALS */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {[
              { 
                title: "Perspective & Pitch", 
                icon: <Presentation />, 
                desc: "Strategic narratives and donor-ready documents. We transform boardrooms into immersive storytelling experiences.",
                feat: ["Boardroom Mastery", "Summit Narratives", "Strategic Proposals", "Donor Artistry"]
              },
              { 
                title: "Digital Curation", 
                icon: <Palette />, 
                desc: "Custom visuals that resonate with human emotion. Creating unique brand assets with a sophisticated regional soul.",
                feat: ["Campaign Spirits", "Social Curation", "Iconic Systems", "Visual Poetry"]
              },
              { 
                title: "Editorial Vision", 
                icon: <Camera />, 
                desc: "Professional image capture and editorial retouching designed for high-impact documentation across the East African block.",
                feat: ["Story Documentation", "Mood Retouching", "Event Auras", "Visual Legacy"]
              },
              { 
                title: "Animated Flow", 
                icon: <MonitorPlay />, 
                desc: "Fluid motion graphics created to simplify complexity. We weave data into beautiful kinetic narratives.",
                feat: ["Data Motion", "Artistic Loops", "Kinetic Theory", "Social Atmosphere"]
              }
            ].map((serv, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20, scale: 1.02 }}
                className="group p-16 md:p-24 glass-card rounded-[100px] space-y-24 flex flex-col justify-between h-full hover:bg-gold/5 border-gold/5 transition-all duration-1000 backdrop-blur-3xl overflow-hidden relative"
              >
                 <div className="space-y-16">
                    <div className="size-24 rounded-full bg-gold/5 flex items-center justify-center text-gold/60 group-hover:bg-gold group-hover:text-black group-hover:scale-110 transition-all duration-700 border border-gold/10">
                       {React.cloneElement(serv.icon, { size: 40, strokeWidth: 1 })}
                    </div>
                    <div className="space-y-8">
                       <h3 className="text-4xl md:text-6xl font-display uppercase italic tracking-tighter group-hover:text-gold transition-colors duration-700 leading-none">{serv.title}</h3>
                       <p className="text-xl md:text-2xl opacity-60 italic font-serif leading-relaxed font-light group-hover:opacity-100 group-hover:text-charcoal transition-all duration-700">
                          {serv.desc}
                       </p>
                    </div>
                 </div>

                 <div className="pt-20 border-t border-charcoal/10 space-y-10">
                    <span className="text-[10px] font-bold uppercase tracking-[1em] text-gold/60 italic block">Creative Focus Points</span>
                    <div className="flex flex-wrap gap-6">
                       {serv.feat.map((f, fi) => (
                          <span key={fi} className="text-[10px] uppercase font-bold tracking-[0.4em] px-8 py-4 border border-charcoal/20 rounded-full opacity-60 hover:opacity-100 hover:border-gold hover:text-gold transition-all duration-700 cursor-default">{f}</span>
                       ))}
                    </div>
                 </div>
                 {/* Decorative background mark */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01] text-[15vw] font-serif italic rotate-12 pointer-events-none group-hover:opacity-[0.03] transition-opacity">Art.{i+1}</div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 🚀 STRATEGIC OUTCOME - The Flow */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 bg-cream/50 relative">
         <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-24">
            <h4 className="text-[11px] font-bold uppercase tracking-[1.5em] text-gold/60 italic">Mission Outcome Aura</h4>
            <h5 className="text-5xl md:text-[11vw] font-display uppercase tracking-tighter italic leading-none mix-blend-exclusion">Visual <br /> <span className="text-gold font-serif not-italic text-outline uppercase">Alchemy.</span></h5>
            <p className="text-2xl md:text-3xl font-serif italic text-charcoal font-light max-w-4xl leading-relaxed opacity-60 border-x border-gold/10 px-12">
               Bridging regional authority with world-class <span className="text-gold font-bold">creative depth.</span>
            </p>
            <div className="pt-24 grid grid-cols-1 md:grid-cols-4 gap-20 w-full">
               {[
                 { val: "Art-Centric", label: "Specialized Sector" },
                 { val: "Bespoke", label: "Strategic Frame" },
                 { val: "Resonant", label: "Regional Logic" },
                 { val: "Kinetic", label: "Data Artistry" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center space-y-8 group cursor-default">
                    <span className="text-4xl font-display italic text-gold group-hover:scale-110 transition-transform duration-700 uppercase">{item.val}</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.5em] opacity-20 group-hover:opacity-80 transition-opacity duration-700 italic border-b border-gold/10 pb-4">{item.label}</span>
                 </div>
               ))}
            </div>
         </div>
         {/* Decorative Grid */}
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10" style={{ backgroundImage: 'linear-gradient(rgba(197, 163, 99, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 163, 99, 0.1) 1px, transparent 1px)', backgroundSize: '150px 150px' }} />
      </section>

      {/* 💎 CONSULTATION INVITATION */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 border-t border-charcoal/10 bg-cream">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-24">
            <div className="space-y-10 text-center lg:text-left">
               <h4 className="text-[11px] font-bold uppercase tracking-[1.5em] text-gold/60 italic">Engage the Studio</h4>
               <h5 className="text-5xl md:text-[8vw] font-display uppercase italic leading-none mix-blend-exclusion">Atelier <br /> <span className="text-gold font-serif not-italic text-outline uppercase tracking-tight">Inquiry.</span></h5>
               <p className="opacity-60 font-serif italic text-2xl md:text-3xl font-light text-charcoal">Let's weave visual narratives for your next regional summit.</p>
            </div>
            <Link to="/contact" className="group bg-gold text-white px-24 py-12 rounded-full font-display uppercase tracking-widest text-[14px] hover:bg-charcoal transition-all duration-700 interactive flex items-center justify-center gap-10 shadow-[0_0_100px_rgba(197,163,99,0.3)]">
               Initiate Discussion <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-700" size={24} strokeWidth={1}/>
            </Link>
         </div>
      </section>
    </div>
  )
}

export default Services
