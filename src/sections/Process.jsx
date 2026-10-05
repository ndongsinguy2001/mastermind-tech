import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import { processSteps } from '../data/agencyData';

const Process = () => {
  const containerRef = useRef(null);
  
  // Suivi du scroll dans la section pour animer la ligne lumineuse
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      id="process" 
      ref={containerRef}
      className="relative py-24 md:py-32 px-6 border-y border-white/5 overflow-hidden"
    >
      {/* Glow d'arrière-plan */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-neon/5 blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          label="NOTRE PROCESSUS"
          title={
            <>
              Une idée. Une méthode.
              <br />
              Une <span className="text-neon">solution.</span>
            </>
          }
          subtitle="Un processus clair et structuré pour transformer votre vision en réalité digitale."
        />

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Ligne verticale grise de fond */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          {/* Ligne lumineuse verte qui se remplit au scroll */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-neon via-neon to-neon/20 md:-translate-x-px shadow-neon-glow"
          />

          {/* Étapes */}
          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => {
              const IconComponent = FiIcons[step.icon];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex items-center md:min-h-[180px] ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Contenu texte (desktop) */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      isEven ? 'pr-16 text-right' : 'pl-16 text-left'
                    }`}
                  >
                    <div
                      className={`inline-block max-w-md ${
                        isEven ? 'ml-auto' : 'mr-auto'
                      }`}
                    >
                      <p className="text-neon font-display font-bold text-sm tracking-[0.2em] mb-2">
                        {step.number}
                      </p>
                      <h3 className="text-2xl font-display font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Point central */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="relative"
                    >
                      {/* Halo externe */}
                      <div className="absolute inset-0 rounded-full bg-neon/30 blur-md" />
                      
                      {/* Cercle principal */}
                      <div className="relative w-12 h-12 rounded-full bg-dark-bg border-2 border-neon flex items-center justify-center shadow-neon-glow">
                        {IconComponent && (
                          <IconComponent className="text-neon text-lg" />
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Contenu texte (mobile) */}
                  <div className="md:hidden pl-20 pr-2">
                    <p className="text-neon font-display font-bold text-xs tracking-[0.2em] mb-1">
                      {step.number}
                    </p>
                    <h3 className="text-lg font-display font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Espace vide pour l'alignement desktop */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;