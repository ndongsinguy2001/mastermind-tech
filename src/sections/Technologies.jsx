import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import * as FiIcons from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import { technologies } from '../data/agencyData';
import { staggerContainer, staggerItem, fadeIn } from '../animations/variants';

const Technologies = () => {
  // Fonction pour récupérer dynamiquement l'icône
  const getIcon = (iconName) => {
    // Si c'est une icône Simple Icons (Si...)
    if (iconName.startsWith('Si')) {
      const Icon = SiIcons[iconName];
      return Icon || null;
    }
    // Si c'est une icône Feather (Fi...)
    if (iconName.startsWith('Fi')) {
      const Icon = FiIcons[iconName];
      return Icon || null;
    }
    return null;
  };

  return (
    <section id="technologies" className="relative py-24 md:py-32 px-6 border-y border-white/5 overflow-hidden">
      {/* Glow central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="container-custom relative z-10">
        <SectionTitle
          label="TECHNOLOGIES"
          title={
            <>
              Les outils que nous
              <br />
              <span className="text-neon">maîtrisons</span>
            </>
          }
          subtitle="Nous utilisons les technologies les plus modernes et performantes pour construire des solutions durables."
        />

        {/* Grille des technologies */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {technologies.map((tech, index) => {
            const IconComponent = getIcon(tech.icon);
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group relative glass p-6 rounded-2xl border border-white/5 hover:border-neon/40 transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer overflow-hidden"
              >
                {/* Glow au hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}15, transparent 70%)`,
                  }}
                />

                {/* Icône */}
                <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                  {IconComponent ? (
                    <IconComponent
                      className="text-4xl transition-all duration-300 group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-neon/20" />
                  )}
                </div>

                {/* Nom */}
                <p className="relative z-10 text-xs text-text-muted group-hover:text-white transition-colors text-center font-medium">
                  {tech.name}
                </p>

                {/* Ligne lumineuse en bas */}
                <div
                  className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`,
                    boxShadow: `0 0 10px ${tech.color}`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistique en bas */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-muted text-sm">
            <span className="text-neon font-bold text-lg">+12</span> technologies maîtrisées •
            <span className="text-neon font-bold text-lg ml-1">MERN</span> Full-Stack certifié
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;