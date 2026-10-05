import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import HeroScene from '../three/HeroScene';
import { agencyInfo } from '../data/agencyData';
import { fadeIn, slideUp, staggerContainer } from '../animations/variants';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg pt-24 pb-12"
    >
      {/* Glow d'arrière-plan */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ===================== COLONNE GAUCHE : TEXTE ===================== */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Label */}
            <motion.div
              variants={slideUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="text-xs tracking-[0.2em] text-neon font-medium">
                {agencyInfo.name.toUpperCase()} — {agencyInfo.subtitle}
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.05] mb-6"
            >
              Nous transformons
              <br />
              vos idées en
              <br />
              <span className="text-neon text-glow">solutions digitales.</span>
            </motion.h1>

            {/* Sous-titre tech */}
            <motion.p
              variants={slideUp}
              className="text-neon/80 text-sm md:text-base font-medium tracking-wide mb-4"
            >
              Applications web • Plateformes métier • Sites web • Digitalisation
            </motion.p>

            {/* Description */}
            <motion.p
              variants={slideUp}
              className="text-text-muted text-base md:text-lg mb-10 max-w-xl leading-relaxed"
            >
              Nous concevons des solutions digitales modernes, performantes et sur mesure
              pour répondre aux besoins réels des entreprises.
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              variants={slideUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group btn btn-primary font-semibold hover:shadow-neon-glow-strong transition-all duration-300"
              >
                Démarrer un projet
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="group btn btn-outline border-white/20 text-white hover:border-neon hover:text-neon hover:bg-neon/5"
              >
                <FiPlay className="mr-2" />
                Découvrir nos réalisations
              </a>
            </motion.div>

            {/* Stats rapides */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/5"
            >
              <div>
                <p className="text-2xl font-display font-bold text-neon">MERN</p>
                <p className="text-xs text-text-muted tracking-wider mt-1">Full-Stack</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-neon">100%</p>
                <p className="text-xs text-text-muted tracking-wider mt-1">Sur mesure</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-neon">∞</p>
                <p className="text-xs text-text-muted tracking-wider mt-1">Évolutif</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ===================== COLONNE DROITE : SCÈNE 3D ===================== */}
          <div className="order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[700px] relative">
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-text-muted tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-neon to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;