import { motion } from 'framer-motion';
import { agencyInfo } from '../../data/agencyData';
import logo from '../../assets/images/logo.png';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo animé */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <div className="relative w-20 h-20 mx-auto">
            {/* Glow vert derrière le logo */}
            <div className="absolute inset-0 bg-neon blur-2xl opacity-40 animate-pulse rounded-full" />
            
            {/* Logo */}
            <img
              src={logo}
              alt={agencyInfo.name}
              className="relative w-full h-full object-contain drop-shadow-[0_0_15px_rgba(168,255,0,0.5)]"
            />
          </div>
        </motion.div>

        {/* Nom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-white font-display font-bold text-lg mb-2">
            MasterMind<span className="text-neon">.tech</span>
          </p>
          <p className="text-text-muted text-xs tracking-[0.3em]">
            {agencyInfo.subtitle}
          </p>
        </motion.div>

        {/* Barre de chargement */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-0.5 bg-neon mt-6 mx-auto rounded-full max-w-[120px] shadow-neon-glow"
        />
      </div>
    </motion.div>
  );
};

export default Loader;