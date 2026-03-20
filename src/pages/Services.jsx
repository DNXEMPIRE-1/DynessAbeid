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
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[1em] text-yellow-500/80 mb-12 flex items-center justify-center gap-8 italic">
             <Sparkles size={14} className="" /> Our Services <Sparkles size={14} className="" />
          </span>
          <h1 className="text-[clamp(3.5rem,15vw,6rem)] md:text-[10vw] lg:text-[11vw] font-display uppercase leading-[0.8] tracking-tighter italic mix-blend-exclusion mb-12">
             Our <br /> <span className="text-yellow-500 font-serif not-italic  uppercase">Expertise.</span>
          </h1>
          <p className="max-w-4xl mt-24 text-2xl md:text-3xl font-serif italic /60 leading-relaxed font-light mx-auto border-x border-gold/20 px-16 uppercase tracking-widest">
             We help organizations communicate effectively through <span className="text-yellow-500 font-bold">high-quality visual design.</span>
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
                title: "Pitch & Strategy", 
                icon: <Presentation />, 
                desc: "Strategic reports and partner-ready documents. We help you share your story effectively in any setting.",
                feat: ["Presentations", "Event Support", "Strategic Reports", "Digital Assets"]
              },
              { 
                title: "Digital Design", 
                icon: <Palette />, 
                desc: "Custom visuals that connect with your audience. We create unique brand assets for modern organizations.",
                feat: ["Brand Identity", "Social Media", "Icon Design", "Graphic Design"]
              },
              { 
                title: "Photography", 
                icon: <Camera />, 
                desc: "Professional photography and editing for high-impact documentation across the region.",
                feat: ["Event Photography", "Portraiture", "Mood Editing", "Visual Content"]
              },
              { 
                title: "Motion Graphics", 
                icon: <MonitorPlay />, 
                desc: "Fluid animations designed to simplify complex ideas. We turn data into engaging visual stories.",
                feat: ["Animated Data", "Looping Graphics", "Video Production", "Social Content"]
              }
            ].map((serv, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20, scale: 1.02 }}
                className="group p-16 md:p-24 glass-card rounded-[100px] space-y-24 flex flex-col justify-between h-full hover:bg-gold/5 border-gold/5 transition-all duration-1000 backdrop-blur-3xl overflow-hidden relative"
              >
                 <div className="space-y-16">
                    <div className="size-24 rounded-full bg-gold/5 flex items-center justify-center text-yellow-500/60 group-hover:bg-gold group-hover:text-black group-hover:scale-110 transition-all duration-700 border border-gold/10">
                       {React.cloneElement(serv.icon, { size: 40, strokeWidth: 1 })}
                    </div>
                    <div className="space-y-8">
                       <h3 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase italic tracking-tighter group-hover:text-yellow-500 transition-colors duration-700 leading-none">{serv.title}</h3>
                       <p className="text-lg md:text-xl lg:text-2xl italic font-serif leading-relaxed font-light group-hover:opacity-100 transition-all duration-700">
                          {serv.desc}
                       </p>
                    </div>
                 </div>

                 <div className="pt-20 border-t border-cream/10 space-y-10">
                    <span className="text-[10px] font-bold uppercase tracking-[1em] text-yellow-500/60 italic block">Creative Focus Points</span>
                    <div className="flex flex-wrap gap-6">
                       {serv.feat.map((f, fi) => (
                          <span key={fi} className="text-[10px] uppercase font-bold tracking-[0.4em] px-8 py-4 border border-charcoal/20 rounded-full  hover:opacity-100 hover:border-gold hover:text-yellow-500 transition-all duration-700 cursor-default">{f}</span>
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
      <section className="section-v-pad px-6 md:px-20 lg:px-32 bg-brown/50 relative">
         <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-24">
            <h4 className="text-[11px] font-bold uppercase tracking-[1.5em] text-yellow-500/60 italic">Core Values</h4>
            <h5 className="text-5xl md:text-8xl lg:text-[11vw] font-display uppercase tracking-tighter italic leading-none mix-blend-exclusion">Visual <br /> <span className="text-yellow-500 font-serif not-italic  uppercase">Design.</span></h5>
            <p className="text-2xl md:text-3xl font-serif italic  font-light max-w-4xl leading-relaxed  border-x border-gold/10 px-12">
               Bridging regional authority with world-class <span className="text-yellow-500 font-bold">creative depth.</span>
            </p>
            <div className="pt-24 grid grid-cols-1 md:grid-cols-4 gap-20 w-full">
               {[
                 { val: "Art-Centric", label: "Specialized Sector" },
                 { val: "Bespoke", label: "Strategic Frame" },
                 { val: "Resonant", label: "Regional Logic" },
                 { val: "Kinetic", label: "Data Artistry" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center space-y-8 group cursor-default">
                    <span className="text-4xl font-display italic text-yellow-500 group-hover:scale-110 transition-transform duration-700 uppercase">{item.val}</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.5em]  group-hover:opacity-80 transition-opacity duration-700 italic border-b border-gold/10 pb-4">{item.label}</span>
                 </div>
               ))}
            </div>
         </div>
         {/* Decorative Grid */}
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10" style={{ backgroundImage: 'linear-gradient(rgba(197, 163, 99, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 163, 99, 0.1) 1px, transparent 1px)', backgroundSize: '150px 150px' }} />
      </section>

      {/* 💎 CONSULTATION INVITATION */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 border-t border-cream/10 bg-brown">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-24">
            <div className="space-y-10 text-center lg:text-left">
               <h4 className="text-[11px] font-bold uppercase tracking-[1.5em] text-yellow-500/60 italic">Contact Us</h4>
               <h5 className="text-5xl md:text-7xl lg:text-[8vw] font-display uppercase italic leading-none mix-blend-exclusion">Get in <br /> <span className="text-yellow-500 font-serif not-italic  uppercase tracking-tight">Touch.</span></h5>
               <p className=" font-serif italic text-2xl md:text-3xl font-light ">We can help with your next project.</p>
            </div>
            <Link to="/contact" className="group bg-gold text-white px-24 py-12 rounded-full font-display uppercase tracking-widest text-[14px] hover:bg-brown/40 transition-all duration-700 interactive flex items-center justify-center gap-10 shadow-[0_0_100px_rgba(197,163,99,0.3)]">
               Start a Project <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-700" size={24} strokeWidth={1}/>
            </Link>
         </div>
      </section>
    </div>
  )
}

export default Services
