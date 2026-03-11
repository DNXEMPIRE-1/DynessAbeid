import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Smart Hide Logic
  useEffect(() => {
    const updateNavbar = () => {
      const currentScrollY = scrollY.get();
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down - hide
      } else {
        setIsVisible(true); // Scrolling up - show
      }
      setLastScrollY(currentScrollY);
    };

    const unsubscribe = scrollY.on("change", updateNavbar);
    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  const menuItems = [
    { name: 'Strategy', path: '/about' },
    { name: 'Verticals', path: '/services' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Engage', path: '/contact' }
  ];

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 }
  };

  return (
    <motion.nav 
      variants={navVariants}
      animate={isOpen || isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full px-6 py-0 md:px-12 md:py-0 z-[1000] flex justify-between items-center pointer-events-none"
    >
      <div className={`absolute inset-x-0 top-0 bg-cream/90 backdrop-blur-[12px] border-b border-charcoal/5 pointer-events-none transition-opacity duration-1000 ${scrollY.get() > 50 ? 'opacity-100' : 'opacity-0'} h-16 md:h-20`} />
      
      <Link to="/" className="font-serif italic font-black text-2xl md:text-4xl  pointer-events-auto interactive group tracking-tighter relative z-10 py-4" data-cursor="DK.HOME">
         Dyness <span className="text-yellow-500">K.</span>
      </Link>
      
      <div className="flex items-center gap-16 relative z-10">
        <div className="hidden lg:flex gap-16 font-black uppercase tracking-[0.5em] text-[13px] items-center pointer-events-auto">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className={`hover:text-yellow-500 transition-all duration-500 hover:tracking-[0.7em] ${location.pathname === item.path ? 'text-yellow-500' : ''}`}>
              {item.name}
            </Link>
          ))}
        </div>
        
        <div 
          className="group cursor-pointer flex flex-col items-end gap-2 pointer-events-auto px-4 py-4" 
          onClick={() => setIsOpen(true)}
          data-cursor="MENU"
        >
          <div className="w-10 h-[1px] bg-gold transition-all duration-500 group-hover:w-16" />
          <div className="w-6 h-[1px] bg-charcoal transition-all duration-500 group-hover:w-10 group-hover:bg-gold" />
        </div>
      </div>

      {/* Fullscreen Art Gallery Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-cream  z-[1100] p-8 md:p-24 flex flex-col justify-between items-start pointer-events-auto"
          >
            <div className="w-full flex justify-between items-start">
               <span className="text-[10px] font-bold uppercase tracking-[1em] text-yellow-500/30 italic">Artisan Navigation Flow</span>
               <button className="interactive group" onClick={() => setIsOpen(false)} data-cursor="CLOSE">
                  <X size={40} strokeWidth={1} className="group-hover:rotate-90 group-hover:text-yellow-500 transition-all duration-700" />
               </button>
            </div>

            <div className="flex flex-col gap-6 md:gap-10">
              {[{name: 'Atmosphere', path: '/'}, ...menuItems].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                >
                  <Link 
                    to={item.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-6xl md:text-[8vw] font-serif italic /90 hover:text-yellow-500 transition-all duration-700 interactive flex items-center gap-8 group leading-[0.85] tracking-tight"
                  >
                    <span className="text-[1.5vw] font-display text-yellow-500/5 group-hover:text-yellow-500/20 transition-colors uppercase not-italic">Art.{i+1}</span>
                    {item.name}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-700 text-yellow-500" size={60} strokeWidth={1} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-charcoal/5">
                <div className="space-y-4">
                   <p className="text-[9px] font-bold uppercase tracking-widest ">Direct Engagement</p>
                   <a href="mailto:hello@dyness.pro" className="text-xl font-serif italic text-yellow-500/60 hover:text-yellow-500 transition-colors">hello@dyness.pro</a>
                </div>
                <div className="space-y-4">
                   <p className="text-[9px] font-bold uppercase tracking-widest ">Creative Base</p>
                   <p className="text-xl font-serif italic /40">Tanzania | Regional East Africa</p>
                </div>
                <div className="flex flex-wrap gap-8 text-[9px] font-bold tracking-[0.4em] uppercase  items-end justify-end">
                   <a href="#" className="hover:text-yellow-500 transition-colors">Instagram</a>
                   <a href="#" className="hover:text-yellow-500 transition-colors">LinkedIn</a>
                </div>
            </div>
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #c5a363 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
