import { motion } from 'framer-motion';
import { FiArrowUpRight, FiImage, FiExternalLink } from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import { projects } from '../data/agencyData';
import { staggerContainer, staggerItem } from '../animations/variants';

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 px-6">
      <div className="container-custom">
        <SectionTitle
          label="RÉALISATIONS"
          title={
            <>
              Des solutions conçues
              <br />
              pour des <span className="text-neon">besoins réels</span>
            </>
          }
          subtitle="Chaque projet est unique. Découvrez quelques-unes de nos réalisations."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative glass rounded-2xl border border-white/5 hover:border-neon/40 transition-all duration-500 overflow-hidden"
            >
              {/* Image / Mockup */}
              <div className="relative aspect-[16/10] overflow-hidden bg-dark-elevated">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-dark-card to-dark-elevated relative">
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: 'linear-gradient(rgba(168, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 255, 0, 0.1) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }} />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-4">
                        <FiImage className="text-neon text-2xl" />
                      </div>
                      <p className="text-text-muted text-xs tracking-wider mb-1">
                        [MOCKUP DU PROJET]
                      </p>
                      <p className="text-text-muted/50 text-[10px]">
                        À remplacer prochainement
                      </p>
                    </div>
                  </div>
                )}

                {/* Catégorie en haut à droite */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-dark-bg/80 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] text-white tracking-wider font-medium">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Overlay dégradé au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Contenu */}
              <div className="p-6 md:p-8">
                {/* Titre */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 group-hover:text-neon transition-colors duration-300 flex items-start justify-between gap-4">
                  <span>{project.title}</span>
                  <FiArrowUpRight className="text-neon flex-shrink-0 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags technologiques */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium text-neon/90 bg-neon/5 border border-neon/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bouton */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all group/btn text-neon hover:gap-3"
                >
                  Voir le projet
                  <FiExternalLink className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Bordure lumineuse au hover */}
              <div className="absolute inset-0 rounded-2xl border border-neon/0 group-hover:border-neon/20 transition-all duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>

        {/* CTA en bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-text-muted text-sm mb-4 max-w-2xl mx-auto">
            Certaines captures d'écran ont été anonymisées pour respecter la confidentialité de nos clients.
            Les liens directs ouvrent la page de connexion des applications.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-neon text-sm font-medium hover:gap-3 transition-all"
          >
            Discuter de votre projet
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;