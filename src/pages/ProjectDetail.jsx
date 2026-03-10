import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Plus, Info, ArrowUpRight, Sparkles } from 'lucide-react'

const projects = {
  'p01': { title: "Exhibition 01", type: "Institutional Soul", img: "/projects/IMG-20260303-WA0047.jpg", client: "Regional NGO Partner", year: "2025", role: "Visual Strategy & Data Viz", challenge: "Visualizing the socio-economic impact across 15 regional districts for multi-lateral donor groups.", solution: "A high-fidelity editorial layout focusing on human stories and clear strategic infographics." },
  'p02': { title: "Exhibition 02", type: "Global Vision", img: "/projects/IMG-20260303-WA0056.jpg", client: "International Agency", year: "2026", role: "Art Direction & Brand Strategy", challenge: "Maintaining global brand standards while resonating with local East African institutional partners.", solution: "A localized visual system built on UNICEF's core identity with high-end regional photography and iconography." },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id] || projects['p01']; // Fallback

  return (
    <div className="w-full bg-transparent overflow-hidden">
      {/* 🎬 EDITORIAL PROJECT HERO - Artistic Narrative */}
      <section className="relative h-[100vh] w-full overflow-hidden flex flex-col justify-end px-6 md:px-20 lg:px-32 pb-24">
         <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
            src={project.img} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent pointer-events-none" />
         
         <div className="relative z-20 max-w-7xl">
            <Link to="/projects" className="inline-flex items-center gap-6 text-[11px] font-bold uppercase tracking-[1em] text-gold mb-12 group interactive" data-cursor="BACK">
               <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" strokeWidth={1} /> Portfolio Archive
            </Link>
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
               className="space-y-12"
            >
               <span className="text-[10px] font-bold uppercase tracking-[1.5em] text-gold animate-pulse italic block">Exhibition Narrative</span>
               <h1 className="text-7xl md:text-[12vw] font-display uppercase tracking-[-0.05em] leading-[0.75] mb-12 mix-blend-exclusion select-none italic">{project.title}</h1>
               <div className="flex flex-wrap gap-12 items-center text-[10px] font-bold uppercase tracking-[0.5em] opacity-40 italic font-serif">
                  <span className="flex items-center gap-6 text-gold/80 opacity-100 italic"><Info size={16} strokeWidth={1} /> {project.client}</span>
                  <div className="h-px w-16 bg-gold/10" />
                  <span className="text-charcoal/60">Cycle: {project.year}</span>
                  <div className="h-px w-16 bg-gold/10" />
                  <span className="text-charcoal/40 uppercase tracking-[1em]">{project.type}</span>
               </div>
            </motion.div>
         </div>
         {/* Decorative Watermark */}
         <div className="absolute top-1/2 right-12 text-[15vw] font-serif font-black italic select-none opacity-[0.02] rotate-90 origin-bottom-right">Analysis.</div>
      </section>

      {/* 🔮 STRATEGIC CURATION */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 relative z-10 bg-white/60 backdrop-blur-xl">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
            <div className="space-y-20">
               <div className="space-y-10">
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.8em] text-gold/60 group flex items-center gap-8">
                     <span className="h-[1px] bg-gold/40 w-16" /> The Challenge Flow
                  </h2>
                  <p className="text-3xl md:text-5xl font-serif italic text-charcoal/90 font-light leading-snug tracking-tight border-l border-gold/20 pl-16">
                     {project.challenge}
                  </p>
               </div>
               <div className="w-full h-px bg-charcoal/10 shadow-2xl" />
               <div className="space-y-12 group cursor-pointer interactive" data-cursor="ROLE">
                  <span className="text-[10px] font-bold uppercase tracking-[0.6em] opacity-20 italic font-serif">Creative Direction Vertical</span>
                  <h4 className="text-4xl md:text-7xl font-display uppercase italic text-outline group-hover:text-gold transition-colors duration-700 leading-none">{project.role}</h4>
               </div>
            </div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="glass-card p-16 md:p-32 rounded-[120px] border-gold/10 space-y-20 flex flex-col justify-center relative overflow-hidden"
            >
               <div className="space-y-10">
                  <h2 className="text-[11px] font-bold uppercase tracking-[1em] text-gold animate-pulse flex items-center gap-6 italic">
                     <Sparkles size={16} strokeWidth={1} /> Strategic Alchemy
                  </h2>
                  <p className="text-xl md:text-3xl leading-relaxed text-charcoal/70 italic font-serif font-light border-l border-gold/20 pl-16">
                     {project.solution}
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-24 border-t border-charcoal/10">
                  {[
                    { title: "High Fidelity", desc: "Premium design outputs for stakeholder reviews.", icon: <ArrowUpRight /> },
                    { title: "Bespoke Logic", desc: "Translating metrics into poetic narratives.", icon: <Plus /> }
                  ].map((item, i) => (
                    <div key={i} className="space-y-8 group cursor-pointer interactive">
                       <div className="size-16 rounded-full border border-gold/10 flex items-center justify-center text-gold/20 group-hover:bg-gold group-hover:text-black transition-all duration-700">
                          {React.cloneElement(item.icon, { size: 28, strokeWidth: 1 })}
                       </div>
                       <h5 className="text-[11px] font-bold uppercase tracking-[0.5em] text-gold/60">{item.title}</h5>
                       <p className="text-[13px] opacity-60 group-hover:opacity-100 transition-all duration-700 font-serif italic leading-loose text-charcoal">{item.desc}</p>
                    </div>
                  ))}
               </div>
               {/* Decorative background mark */}
               <div className="absolute -bottom-10 -right-10 text-[10vw] font-serif italic opacity-[0.02] select-none pointer-events-none">Solution.</div>
            </motion.div>
         </div>
      </section>

      {/* 🚀 CASE EXHIBITION GALLERY */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 bg-cream border-y border-charcoal/10">
         <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center space-y-8">
               <h2 className="text-[10px] font-bold uppercase tracking-[2em] text-gold/60 italic">Aesthetic Evidence</h2>
               <h3 className="text-4xl md:text-[8vw] font-display italic mix-blend-exclusion">Visual <span className="text-gold font-serif not-italic text-outline uppercase tracking-tight">Highlights.</span></h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <motion.div whileHover={{ y: -20 }} className="aspect-[4/3] rounded-[80px] overflow-hidden border border-gold/5 glass-card flex items-center justify-center group">
                  <img src={project.img} className="w-full h-full object-cover transition-all duration-[2000ms] scale-125 group-hover:scale-105" />
               </motion.div>
               <motion.div whileHover={{ y: -20, delay: 0.1 }} className="aspect-[4/3] rounded-[80px] overflow-hidden border border-gold/5 glass-card flex items-center justify-center group">
                  <img src="/projects/IMG-20260303-WA0057.jpg" className="w-full h-full object-cover transition-all duration-[2000ms] scale-125 group-hover:scale-105" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* 💎 SIGNATURE PROJECT CTA */}
      <section className="section-v-pad px-6 md:px-20 lg:px-32 text-center bg-cream">
         <div className="max-w-5xl mx-auto glass-card p-24 md:p-40 rounded-[150px] space-y-20 border-gold/5 bg-gradient-to-br from-white/[0.01] to-transparent relative isolate overflow-hidden">
            <h4 className="text-6xl md:text-[10vw] font-display uppercase tracking-tighter leading-[0.8] italic mix-blend-exclusion">Start your <br /> <span className="text-gold font-serif not-italic text-outline uppercase tracking-tight">Project.</span></h4>
            <div className="pt-24">
               <Link to="/contact" className="group bg-gold text-white px-24 py-12 rounded-full font-display uppercase tracking-widest text-[14px] shadow-[0_50px_100px_rgba(197,163,99,0.2)] hover:bg-charcoal transition-all duration-700 interactive flex items-center justify-center gap-10 mx-auto w-fit">
                  Initiate Discussion <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-700" size={24} strokeWidth={1} />
               </Link>
            </div>
            {/* Atmosphere Mark */}
            <div className="absolute inset-x-0 bottom-0 opacity-[0.02] text-[20vw] font-serif black italic -z-10 select-none pointer-events-none">Engagement.</div>
         </div>
      </section>
    </div>
  )
}

export default ProjectDetail
