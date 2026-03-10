import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, MousePointer2, ChevronDown, Plus, Globe, BarChart3, Presentation, Palette, Target, Award, Sparkles, Wand2, Fingerprint } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
}

const reveal = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
}

const Home = () => {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  return (
    <div className="w-full bg-transparent text-charcoal selection:bg-gold/20 selection:text-charcoal">
      
      {/* 🌸 ARTISTIC ETHEREAL HERO */}
      <section className="relative h-screen flex flex-col justify-center pt-20 px-6 md:px-20 lg:px-32 z-50 overflow-hidden">
         <motion.div 
            style={{ opacity: bgOpacity }}
            className="max-w-7xl relative z-10 mt-12 md:mt-0"
         >
            <motion.div 
               {...fadeUp}
               className="flex items-center gap-6 mb-8 md:mb-12"
            >
               <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[1em] text-gold animate-pulse italic">
                  Digital Artisan & Creative Visionary
               </span>
               <div className="h-px bg-gold/20 flex-grow" />
            </motion.div>

            <motion.div style={{ y: titleY }} className="relative">
               <motion.h1 
                  {...reveal}
                  className="text-[12vw] md:text-[9vw] font-display uppercase leading-[0.8] tracking-tighter mix-blend-exclusion"
               >
                  Artistic <br /> 
                  <span className="text-gold font-serif italic not-uppercase tracking-tight lowercase opacity-90 drop-shadow-2xl">
                     Alchemy.
                  </span>
               </motion.h1>
               <motion.p 
                  {...fadeUp}
                  className="mt-8 md:mt-12 max-w-2xl text-lg md:text-2xl font-serif italic text-charcoal font-light leading-relaxed tracking-tight opacity-80"
               >
                  Crafting strategic institutional narratives with a <span className="text-gold font-bold">bespoke artistic touch.</span>
               </motion.p>
            </motion.div>

            <motion.div {...fadeUp} className="mt-12 md:mt-16 flex flex-wrap gap-8 md:gap-12 items-center">
               <Link to="/projects" className="group relative overflow-hidden bg-gold text-white px-12 md:px-16 py-6 md:py-8 rounded-full font-display uppercase tracking-widest text-[10px] md:text-[12px] hover:bg-charcoal transition-all duration-700 shadow-[0_0_80px_rgba(197,163,99,0.2)] interactive" data-cursor="VIEW">
                  Explore Gallery
               </Link>
               <Link to="/contact" className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] border-b border-gold/30 pb-2 hover:text-gold transition-colors duration-500 interactive" data-cursor="START">
                  Initiate Discussion
               </Link>
            </motion.div>
         </motion.div>

         {/* Decorative Side Marker */}
         <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-12 opacity-20">
            <span className="vertical-text text-[10px] font-bold uppercase tracking-[1em] rotate-180">EST. DAR ES SALAAM 2026</span>
            <div className="w-px h-32 bg-gold/40" />
            <Fingerprint size={20} className="text-gold" strokeWidth={1} />
         </div>

         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
               <ChevronDown size={24} strokeWidth={1} />
            </motion.div>
         </div>
      </section>

      {/* 🎨 THE SIGNATURE APPROACH - Artistic & Structured */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 relative bg-white/40 backdrop-blur-md">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32 items-center">
            <motion.div {...reveal} className="lg:w-1/2 relative">
               <div className="aspect-[4/6] rounded-[100px] overflow-hidden border border-gold/10 glass-card relative group">
                  <img src="/projects/IMG-20260225-WA0055.jpg" alt="Artist at work" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-1000 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
                  <div className="absolute bottom-16 left-16">
                     <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold/80 italic block mb-4">The Methodology</span>
                     <h3 className="text-4xl font-display uppercase italic text-charcoal">Crafted <br /> Precision.</h3>
                  </div>
               </div>
               {/* Floating Sparkle */}
               <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-12 -right-12"
               >
                  <Sparkles size={60} className="text-gold/20" />
               </motion.div>
            </motion.div>

            <div className="lg:w-1/2 space-y-16">
              <div className="space-y-8">
                <h2 className="text-[10px] font-bold uppercase tracking-[1em] text-gold/60 italic">Global Identity</h2>
                <h3 className="text-6xl md:text-8xl font-display leading-[0.8] tracking-tighter uppercase italic text-charcoal">Strategic <br /> <span className="text-outline">Artistry.</span></h3>
              </div>
              <div className="space-y-12 max-w-xl">
                <p className="text-2xl font-serif italic text-charcoal/80 leading-relaxed font-light">
                  "I don't just design reports; I weave institutional impact into <span className="text-gold font-bold">visual poetry</span> that speaks directly to global donors."
                </p>
                <div className="grid grid-cols-2 gap-12 pt-12 border-t border-charcoal/10">
                   <div className="space-y-4">
                      <Wand2 className="text-gold/60" size={24} strokeWidth={1} />
                       <h4 className="text-[11px] font-bold uppercase tracking-widest italic text-charcoal">Artistic Polish</h4>
                       <p className="text-[10px] opacity-60 uppercase font-black tracking-widest leading-loose text-charcoal">Visual assets that transcend standard corporate design.</p>
                   </div>
                   <div className="space-y-4">
                      <Target className="text-gold/60" size={24} strokeWidth={1} />
                       <h4 className="text-[11px] font-bold uppercase tracking-widest italic text-charcoal">Strategic Core</h4>
                       <p className="text-[10px] opacity-60 uppercase font-black tracking-widest leading-loose text-charcoal">Logic-driven layouts for high-stakes institutional review.</p>
                   </div>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* 💎 SHOWCASE - Fluid & Immersive */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 bg-cream/50">
         <div className="max-w-7xl mx-auto space-y-20">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
               <h3 className="text-5xl md:text-8xl font-display uppercase tracking-tight italic text-charcoal">Curated <br /> <span className="text-gold font-serif not-italic text-outline">Exhibition.</span></h3>
               <p className="text-lg font-serif italic opacity-60 max-w-sm border-l border-gold/40 pl-10 text-charcoal">Selected highlights from our boutique design studio servicing East Africa.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {[
                  { title: "Metropolitan Aura", type: "City Strategy", img: "/projects/daressalaaam.jpg" },
                  { title: "Strategic Soul", type: "Motion Piece", img: "/projects/VID-20260303-WA0048.mp4", isVideo: true },
                  { title: "Modern Logic", type: "Concept Frame", img: "/projects/cooldesign.jpg" },
                  { title: "Wild Perspective", type: "Regional Soul", img: "/projects/safari.jpg" }
                ].map((project, i) => (
                 <motion.div 
                    key={i}
                    {...fadeUp}
                    whileHover={{ y: -20 }}
                    className="group space-y-8"
                 >
                    <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-gold/10 glass-card relative group cursor-pointer">
                       {project.isVideo ? (
                          <video src={project.img} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" autoPlay loop muted playsInline />
                       ) : (
                          <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                       )}
                       <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-transparent to-transparent flex flex-col justify-end p-16">
                          <Link to="/projects" className="size-20 bg-gold/90 rounded-full flex items-center justify-center text-black -rotate-45 group-hover:rotate-0 transition-transform shadow-2xl self-end interactive">
                             <Plus size={32} />
                          </Link>
                       </div>
                    </div>
                    <div className="flex justify-between items-start pt-8 border-t border-cream/10">
                       <div className="space-y-2">
                           <h4 className="text-3xl font-serif italic text-charcoal/90 group-hover:text-gold transition-colors">{project.title}</h4>
                           <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-60 italic font-serif text-charcoal">{project.type}</span>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 🚀 THE INVITATION - Artistic CTA */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 text-center bg-cream">
         <div className="max-w-5xl mx-auto glass-card p-24 md:p-40 rounded-[120px] space-y-16 border-gold/10 relative overflow-hidden">
            <span className="text-[10px] font-bold uppercase tracking-[1em] text-gold/80 animate-pulse italic">Phase Engagement Initiation</span>
            <h4 className="text-6xl md:text-[10vw] font-display uppercase tracking-tighter leading-none italic">Let's Create <br /> <span className="text-gold font-serif not-italic text-outline uppercase">Magic.</span></h4>
            <p className="text-2xl font-serif italic text-charcoal/80 max-w-2xl mx-auto leading-relaxed border-x border-gold/20 px-12">
               Elevate your institution's communication through an artistic lens.
            </p>
            <div className="pt-16">
               <Link to="/contact" className="group relative inline-flex items-center justify-center p-12 bg-gold rounded-full text-black hover:scale-110 transition-transform duration-700 shadow-[0_0_100px_rgba(197,163,99,0.3)]">
                  <ArrowUpRight size={48} strokeWidth={1} className="group-hover:rotate-45 transition-transform duration-700" />
               </Link>
            </div>
            
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle, #c5a363 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
         </div>
      </section>

    </div>
  )
}

export default Home
