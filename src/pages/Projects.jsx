import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus, ExternalLink, ArrowRight, Layout, Presentation, Palette, Camera, MonitorPlay, MousePointer2, Sparkles, Wand2, X } from 'lucide-react'
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

const Projects = () => {
  const [activeAsset, setActiveAsset] = useState(null);

  const assets = [
    { type: 'video', src: '/projects/VID-20260303-WA0048.mp4', label: 'Motion Graphics' },
    { type: 'video', src: '/projects/VID-20260303-WA0049.mp4', label: 'Animated Content' },
    { type: 'image', src: '/projects/IMG-20260303-WA0047.jpg', label: 'Annual Report' },
    { type: 'image', src: '/projects/daressalaaam.jpg', label: 'City Landscape' },
    { type: 'image', src: '/projects/safari.jpg', label: 'Outdoor Photography' },
    { type: 'image', src: '/projects/environmentday.jpg', label: 'Sustainability Design' },
    { type: 'image', src: '/projects/independencedaytz.jpg', label: 'National Identity' },
    { type: 'image', src: '/projects/womensday.jpg', label: 'Social Content' },
    { type: 'image', src: '/projects/concert.jpg', label: 'Event Coverage' },
    { type: 'image', src: '/projects/cooldesign.jpg', label: 'Creative Design' },
    { type: 'image', src: '/projects/sport.jpg', label: 'Sports Photography' },
    { type: 'image', src: '/projects/biryani.jpg', label: 'Food Photography' },
    { type: 'image', src: '/projects/food.jpg', label: 'Food Content' },
    { type: 'image', src: '/projects/drip.jpg', label: 'Product Shot' },
    { type: 'image', src: '/projects/party.jpg', label: 'Event Photography' },
    { type: 'image', src: '/projects/camp.jpg', label: 'Travel Content' },
    { type: 'image', src: '/projects/IMG-20260225-WA0056.jpg', label: 'Business Design' },
    { type: 'image', src: '/projects/IMG-20260303-WA0046.jpg', label: 'Graphic Design' },
    { type: 'image', src: '/projects/IMG-20260303-WA0050.jpg', label: 'Strategic Story' },
    { type: 'image', src: '/projects/IMG-20260303-WA0051.jpg', label: 'Design Detail' },
    { type: 'image', src: '/projects/IMG-20260303-WA0052.jpg', label: 'Identity Design' },
    { type: 'image', src: '/projects/IMG-20260303-WA0053.jpg', label: 'Visual Design' },
    { type: 'image', src: '/projects/IMG-20260303-WA0054.jpg', label: 'Layout Design' },
    { type: 'image', src: '/projects/IMG-20260303-WA0055.jpg', label: 'Regional Focus' },
    { type: 'image', src: '/projects/IMG-20260303-WA0056.jpg', label: 'Impact Report' },
    { type: 'image', src: '/projects/IMG-20260303-WA0057.jpg', label: 'Creative Concept' },
    { type: 'image', src: '/projects/IMG-20260303-WA0058.jpg', label: 'Custom Layout' },
    { type: 'image', src: '/projects/IMG-20260225-WA0055.jpg', label: 'Behind the Scenes' },
  ];

  return (
    <div className="w-full bg-transparent overflow-hidden">
      {/* 🎬 ARTISTIC EXHIBITION HEADER */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 relative overflow-hidden flex flex-col items-center text-center">
        <motion.div 
           {...reveal}
           className="relative max-w-6xl pt-20"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[1em] text-yellow-500/60 mb-12 flex items-center justify-center gap-8 italic">
             <Plus size={12} className="" /> Our Portfolio <Plus size={12} className="" />
          </span>
          <h1 className="text-[clamp(3.5rem,16vw,6rem)] md:text-[10vw] font-display uppercase leading-[0.8] tracking-tighter italic mix-blend-exclusion mb-12">
             Our <br /> <span className="text-yellow-500 font-serif not-italic  uppercase">Gallery.</span>
          </h1>
          <p className="max-w-4xl mt-12 text-2xl md:text-3xl font-serif italic /60 leading-relaxed font-light mx-auto border-x border-gold/20 px-12 uppercase tracking-wide">
             A collection of our work in strategic communication, professional design, and <span className="text-yellow-500 font-bold">visual content.</span>
          </p>
        </motion.div>
        
        {/* Background Visual Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.01]">
           <span className="text-[40vw] font-serif font-black italic whitespace-nowrap select-none">Impact.</span>
        </div>
      </section>

      {/* 💎 THE MASONRY GALLERY */}
      <section className="px-6 md:px-20 lg:px-32 py-12 relative z-10">
         <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
            {assets.map((asset, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid relative group mb-12"
              >
                <div 
                   onClick={() => setActiveAsset(asset)}
                   className="glass-card rounded-[40px] md:rounded-[60px] overflow-hidden border-gold/10 bg-charcoal/[0.01] relative isolate group cursor-pointer shadow-2xl transition-all duration-700 hover:border-gold/30" 
                   data-cursor="VIEW"
                >
                   {asset.type === 'video' ? (
                     <video 
                       src={asset.src} 
                       className="w-full transition-all duration-1000 opacity-90 group-hover:opacity-100 scale-105 group-hover:scale-100"
                       autoPlay 
                       loop 
                       muted 
                       playsInline 
                     />
                   ) : (
                     <img 
                       src={asset.src} 
                       alt={asset.label} 
                       className="w-full transition-all duration-1000 opacity-90 group-hover:opacity-100 scale-105 group-hover:scale-100"
                     />
                   )}
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-brown/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-12 pointer-events-none">
                      <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                         <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-yellow-500 italic">Project #{(i+1).toString().padStart(2, '0')}</span>
                          <h4 className="text-2xl md:text-3xl font-serif italic  leading-none">{asset.label}</h4>
                      </div>
                      <div className="absolute top-8 right-8 size-12 bg-gold/90 rounded-full flex items-center justify-center text-black -rotate-45 group-hover:rotate-0 transition-transform shadow-xl scale-0 group-hover:scale-100">
                         <Plus size={24} />
                      </div>
                   </div>
                   
                   {asset.type === 'video' && (
                      <div className="absolute top-8 left-8 size-10 rounded-full bg-cream/40 backdrop-blur-md flex items-center justify-center text-yellow-500 border border-gold/20">
                        <MonitorPlay size={18} strokeWidth={1} />
                     </div>
                   )}
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 🔮 CINEMATIC LIGHTBOX */}
      <AnimatePresence>
        {activeAsset && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-brown/98 flex items-center justify-center p-4 md:p-12 lg:p-24"
            onClick={() => setActiveAsset(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="relative w-full max-w-7xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveAsset(null)}
                 className="absolute top-0 right-0 md:-top-16 md:-right-16 /40 hover:text-yellow-500 transition-colors interactive group p-4"
                data-cursor="CLOSE"
              >
                 <X size={48} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-700" />
              </button>
              
              <div className="w-full h-full glass-card rounded-[40px] md:rounded-[80px] overflow-hidden border-cream/10 flex items-center justify-center bg-transparent">
                {activeAsset.type === 'video' ? (
                  <video 
                    src={activeAsset.src} 
                    className="max-w-full max-h-full"
                    controls
                    autoPlay
                    loop
                  />
                ) : (
                  <img 
                    src={activeAsset.src} 
                    className="max-w-full max-h-full object-contain"
                    alt={activeAsset.label}
                  />
                )}
              </div>

               <div className="absolute -bottom-16 left-0 text-left space-y-2 hidden md:block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-yellow-500 italic">Viewing</span>
                  <h4 className="text-3xl font-serif italic  leading-none">{activeAsset.label}</h4>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🚀 THE NEXT EXHIBITION - Final Engagement */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 text-center bg-brown">
          <div className="max-w-5xl mx-auto glass-card p-24 md:p-32 rounded-[100px] space-y-16 border-gold/10 relative overflow-hidden bg-charcoal/[0.01]">
            <h4 className="text-5xl md:text-8xl lg:text-[9vw] font-display uppercase tracking-tighter leading-none italic mix-blend-exclusion">Let's Start a <br /> <span className="text-yellow-500 font-serif not-italic  uppercase tracking-tight">Project.</span></h4>
             <p className="text-xl md:text-3xl font-serif italic /80 max-w-2xl mx-auto leading-relaxed font-light border-x border-gold/20 px-16 italic">
                Ready to transform institutional metrics into <span className="text-yellow-500 font-bold">visual poetry?</span>
             </p>
            <div className="pt-12">
                <Link to="/contact" className="inline-block bg-gold text-white px-12 md:px-24 py-6 md:py-12 rounded-full font-display uppercase tracking-widest text-[12px] md:text-[14px] shadow-[0_40px_100px_rgba(197,163,99,0.2)] hover:bg-charcoal transition-all duration-700 interactive" data-cursor="ACTION">
                  Initiate Engagement
               </Link>
            </div>
            {/* Background Atmosphere Overlay */}
            <div className="absolute inset-x-0 bottom-0 opacity-[0.03] pointer-events-none -z-10 text-[20vw] font-serif font-black italic select-none">Studio.</div>
         </div>
      </section>
    </div>
  )
}

export default Projects
