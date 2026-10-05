import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { expertise } from '../data/agencyData';
import { staggerContainer, staggerItem } from '../animations/variants';

const Expertise = () => {
  return (
    <section id="expertise" className="relative py-24 md:py-32 px-6 border-y border-white/5">
      {/* Glow subtil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon/5 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertise.map((item, index) => {
            const IconComponent = FiIcons[item.icon];
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-neon/40 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Ligne décorative en haut */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center mb-5 group-hover:bg-neon/20 transition-colors">
                  {IconComponent && <IconComponent className="text-neon text-xl" />}
                </div>

                <h3 className="text-lg font-display font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;