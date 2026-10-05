import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import { solutions } from '../data/agencyData';
import { staggerContainer, staggerItem, fadeIn } from '../animations/variants';

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  return (
    <section id="solutions" className="relative py-24 md:py-32 px-6 border-y border-white/5 overflow-hidden">
      {/* Glow d'arrière-plan */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-neon/5 blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          label="NOS SOLUTIONS"
          title={
            <>
              Du besoin métier
              <br />
              à la <span className="text-neon">solution digitale</span>
            </>
          }
          subtitle="Nous concevons des outils qui s'adaptent à vos processus, pas l'inverse."
        />

        {/* Interface dashboard */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="glass-strong rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* Barre supérieure (style fenêtre) */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-dark-card/50">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-text-muted tracking-wider">
                mastermind.tech / solutions
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Menu latéral (liste des solutions) */}
            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/5 p-4">
              <p className="text-xs text-text-muted tracking-[0.2em] px-3 mb-4 mt-2">
                CATÉGORIES
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                {solutions.map((solution) => {
                  const IconComponent = FiIcons[solution.icon];
                  const isActive = activeSolution.id === solution.id;
                  return (
                    <button
                      key={solution.id}
                      onClick={() => setActiveSolution(solution)}
                      className={`relative flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-300 group ${
                        isActive
                          ? 'bg-neon/10 text-white'
                          : 'text-text-muted hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeSolution"
                          className="absolute left-0 top-2 bottom-2 w-0.5 bg-neon rounded-r-full shadow-neon-glow"
                        />
                      )}
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive ? 'bg-neon/20 text-neon' : 'bg-white/5'
                        }`}
                      >
                        {IconComponent && <IconComponent className="text-sm" />}
                      </span>
                      <span className="text-sm font-medium truncate">
                        {solution.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contenu principal */}
            <div className="lg:col-span-2 p-8 md:p-12 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSolution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icône principale */}
                  <div className="w-16 h-16 rounded-2xl bg-neon/10 flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 rounded-2xl bg-neon/20 blur-xl" />
                    {(() => {
                      const Icon = FiIcons[activeSolution.icon];
                      return Icon ? <Icon className="text-neon text-3xl relative z-10" /> : null;
                    })()}
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                    {activeSolution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-base leading-relaxed mb-8 max-w-lg">
                    {activeSolution.description}
                  </p>

                  {/* Points forts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Interface intuitive',
                      'Architecture évolutive',
                      'Sécurité renforcée',
                      'Performance optimisée',
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neon" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Bouton */}
                  <div className="mt-10">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-neon text-sm font-medium hover:gap-3 transition-all"
                    >
                      Discuter de ce besoin
                      <FiIcons.FiArrowRight />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Éléments décoratifs */}
              <div className="absolute top-8 right-8 hidden md:block">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-neon/30"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;