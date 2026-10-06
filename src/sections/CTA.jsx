import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone, FiMessageCircle } from 'react-icons/fi';
import { agencyInfo } from '../data/agencyData';
import { staggerContainer, staggerItem } from '../animations/variants';

const CTA = () => {
  return (
    <section 
      id="cta" 
      className="relative py-32 md:py-40 px-6 overflow-hidden"
    >
      {/* ====== PHOTO EN ARRIÈRE-PLAN (assombrie) ====== */}
      <div className="absolute inset-0 z-0">
        {/* Photo - servie depuis public/ */}
        <img
          src="/hero.png"
          alt="Fondateur MasterMind.tech"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-20"
        />
        
        {/* Overlay dégradé sombre */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/90 to-dark-bg" />
        
        {/* Glow vert central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon/10 blur-[150px] rounded-full" />
      </div>

      {/* ====== CONTENU ====== */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Label */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-xs tracking-[0.2em] text-neon font-medium">
              PRÊT À DÉMARRER ?
            </span>
          </motion.div>

          {/* Titre */}
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.05] mb-8"
          >
            Votre prochaine
            <br />
            solution digitale
            <br />
            <span className="text-neon text-glow">commence ici.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Vous avez une idée, un besoin ou un problème à résoudre ?
            Parlons-en. Discutons de votre projet et construisons ensemble la solution adaptée.
          </motion.p>

          {/* Boutons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="group btn btn-primary btn-lg font-semibold hover:shadow-neon-glow-strong transition-all w-full sm:w-auto"
            >
              Parler de mon projet
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${agencyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn btn-outline btn-lg border-white/20 text-white hover:border-neon hover:text-neon hover:bg-neon/5 w-full sm:w-auto"
            >
              <FiMessageCircle className="mr-2" />
              Demander un devis
            </a>
          </motion.div>

          {/* Contact rapide */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-white/10 max-w-xl mx-auto"
          >
            <a
              href={`mailto:${agencyInfo.email}`}
              className="flex items-center gap-3 text-sm text-text-muted hover:text-neon transition-colors group"
            >
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:border-neon/50 transition-colors">
                <FiArrowRight className="rotate-[-45deg]" />
              </span>
              <span className="text-left">
                <span className="block text-[10px] tracking-widest text-text-muted/60 uppercase">
                  Email
                </span>
                <span className="block font-medium">{agencyInfo.email}</span>
              </span>
            </a>

            <a
              href={`tel:${agencyInfo.phone}`}
              className="flex items-center gap-3 text-sm text-text-muted hover:text-neon transition-colors group"
            >
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:border-neon/50 transition-colors">
                <FiPhone />
              </span>
              <span className="text-left">
                <span className="block text-[10px] tracking-widest text-text-muted/60 uppercase">
                  Téléphone
                </span>
                <span className="block font-medium">{agencyInfo.phoneDisplay}</span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-neon/20 rounded-tl-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-neon/20 rounded-br-3xl pointer-events-none" />
    </section>
  );
};

export default CTA;