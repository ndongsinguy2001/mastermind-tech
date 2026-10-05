import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { agencyInfo, navLinks } from '../../data/agencyData';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { cn } from '../../utils/cn';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300',
          isScrolled 
            ? 'py-3 glass-strong shadow-lg shadow-black/20' 
            : 'py-5 bg-transparent'
        )}
      >
        <div className="container-custom px-6 flex items-center justify-between">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Glow vert derrière le logo */}
              <div className="absolute inset-0 bg-neon blur-lg opacity-30 group-hover:opacity-50 transition-opacity rounded-full" />
              
              {/* Logo */}
              <img
                src={logo}
                alt={agencyInfo.name}
                className="relative w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_8px_rgba(168,255,0,0.4)]"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-display font-bold tracking-tight">
                MasterMind<span className="text-neon">.tech</span>
              </span>
              <span className="text-[10px] text-text-muted tracking-[0.2em] mt-0.5">
                {agencyInfo.subtitle}
              </span>
            </div>
          </a>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm text-text-muted hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA DESKTOP */}
          <a
            href="#contact"
            className="hidden lg:inline-flex btn btn-primary btn-sm font-semibold hover:shadow-neon-glow transition-all duration-300"
          >
            Demander un projet
          </a>

          {/* BOUTON MENU MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-white hover:text-neon transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full z-40 lg:hidden glass-strong border-t border-white/5"
          >
            <div className="flex flex-col py-6 px-6 gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="py-3 text-text-muted hover:text-neon transition-colors border-b border-white/5 last:border-none"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="btn btn-primary mt-4 font-semibold"
              >
                Demander un projet
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;