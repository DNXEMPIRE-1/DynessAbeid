import React, { useRef, useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Experience from '../components/Experience'

const CustomCursor = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
    const [cursorContent, setCursorContent] = useState('');
    const [click, setClick] = useState(false);
  
    const springConfig = { damping: 35, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      const handleMouseDown = () => setClick(true);
      const handleMouseUp = () => setClick(false);
      const handleMouseOver = (e) => {
        const target = e.target.closest('[data-cursor]');
        if (target) {
           setCursorContent(target.getAttribute('data-cursor'));
        } else {
           setCursorContent('');
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseover', handleMouseOver);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('mouseover', handleMouseOver);
      };
    }, [mouseX, mouseY]);
  
    return (
      <>
        {/* Artistic Core */}
        <motion.div 
          className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[10001] shadow-[0_0_15px_rgba(197,163,99,0.5)]"
          style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%', scale: cursorContent ? 0.5 : click ? 0.5 : 1 }}
        />
        {/* Artistic Halo */}
        <motion.div 
          className="fixed top-0 left-0 border border-gold/20 rounded-full pointer-events-none z-[10000] mix-blend-exclusion flex items-center justify-center backdrop-blur-[1px]"
          style={{ 
            x: cursorX, y: cursorY, 
            translateX: '-50%', translateY: '-50%', 
            width: cursorContent ? 120 : 40, height: cursorContent ? 120 : 40,
            scale: click ? 0.8 : 1,
            transition: { type: 'spring', damping: 20 }
          }}
        >
          {cursorContent && (
             <motion.span 
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               className="text-[9px] font-display uppercase tracking-[0.3em] font-black text-gold"
             >
                {cursorContent}
             </motion.span>
          )}
        </motion.div>
      </>
    );
  };

const Layout = ({ children }) => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-cream transition-colors duration-1000">
      <CustomCursor />
      <Experience />
      <Navbar />
      <main className="relative z-10 w-full overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
