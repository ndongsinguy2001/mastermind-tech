import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import { whyUs } from '../data/agencyData';
import { staggerContainer, staggerItem } from '../animations/variants';

const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Glow d'arrière-plan */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon/5 blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          label="POURQUOI NOUS"
          title={
            <>
              Pourquoi travailler avec
              <br />
              <span className="text-neon">MasterMind.tech</span>
            </>
          }
          subtitle="Nous ne nous contentons pas de livrer du code. Nous construisons des partenariats durables."
        />

        {/* Grille des arguments */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {whyUs.map((item, index) => {
            const IconComponent = FiIcons[item.icon];
            // Le premier élément prend 2 colonnes sur lg pour créer un rythme visuel
            const isFeatured = index === 0;

            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`group relative glass rounded-2xl border border-white/5 hover:border-neon/40 transition-all duration-500 p-6 md:p-8 overflow-hidden ${
                  isFeatured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Numéro en filigrane */}
                <div className="absolute -top-4 -right-2 text-8xl font-display font-bold text-white/[0.03] group-hover:text-neon/[0.08] transition-colors duration-500 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Glow au hover */}
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icône */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors flex-shrink-0">
                      {IconComponent && (
                        <IconComponent className="text-neon text-xl" />
                      )}
                    </div>

                    {/* Ligne décorative */}
                    <div className="flex-1 h-px bg-gradient-to-r from-neon/30 to-transparent" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg md:text-xl font-display font-bold text-white mb-3 group-hover:text-neon transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Coins décoratifs */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-neon/0 group-hover:border-neon/40 transition-all duration-500 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-neon/0 group-hover:border-neon/40 transition-all duration-500 rounded-br-2xl" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistique en bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 glass rounded-2xl border border-white/5 p-6 md:p-8 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-display font-bold text-neon">100%</p>
              <p className="text-xs text-text-muted tracking-wider mt-1">Sur mesure</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div>
              <p className="text-2xl md:text-3xl font-display font-bold text-neon">MERN</p>
              <p className="text-xs text-text-muted tracking-wider mt-1">Full-Stack</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div>
              <p className="text-2xl md:text-3xl font-display font-bold text-neon">∞</p>
              <p className="text-xs text-text-muted tracking-wider mt-1">Évolutif</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;