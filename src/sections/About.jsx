import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiCode, FiLayers, FiUsers } from 'react-icons/fi';
import { agencyInfo } from '../data/agencyData';
import { slideLeft, staggerContainer, staggerItem } from '../animations/variants';

const About = () => {
  const highlights = [
    { icon: FiCode, label: 'Développement Full-Stack' },
    { icon: FiLayers, label: 'Architecture applicative' },
    { icon: FiAward, label: 'Solutions métier' },
    { icon: FiUsers, label: 'Expérience utilisateur' },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ===================== COLONNE GAUCHE : PHOTO ===================== */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative order-2 lg:order-1"
          >
            {/* Cadre décoratif */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Glow derrière la photo */}
              <div className="absolute -inset-4 bg-neon/20 rounded-3xl blur-2xl opacity-50" />

              {/* Bordure verte */}
              <div className="absolute -inset-2 rounded-3xl border border-neon/30" />

              {/* Conteneur photo */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-elevated border border-white/10 group">
                {/* Photo du fondateur */}
                <img
                  src="/src/assets/images/hero.jpg"
                  alt="Mr NDONG - Développeur MERN Full-Stack"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay décoratif */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />

                {/* Badge flottant */}
                <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-xl p-3 border border-white/10">
                  <p className="text-xs text-neon font-medium tracking-wider mb-0.5">
                    {agencyInfo.role}
                  </p>
                  <p className="text-sm text-white font-display font-bold">
                    {agencyInfo.founder}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===================== COLONNE DROITE : TEXTE ===================== */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 lg:order-2"
          >
            <motion.p
              variants={staggerItem}
              className="text-neon text-xs tracking-[0.3em] font-medium mb-4"
            >
              À PROPOS
            </motion.p>

            <motion.h2
              variants={staggerItem}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6"
            >
              Le développeur derrière
              <br />
              <span className="text-neon">MasterMind.tech</span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-text-muted text-base leading-relaxed mb-6"
            >
              Je suis développeur MERN Full-Stack certifié par GOMYCODE Sénégal. Mon travail consiste
              à transformer des besoins métier en solutions digitales modernes, intuitives et évolutives.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-text-muted text-base leading-relaxed mb-8"
            >
              Mon expérience professionnelle m'a permis de participer au développement de plateformes
              et d'applications destinées à améliorer la gestion et la digitalisation des activités
              d'une organisation.
            </motion.p>

            {/* Points forts */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-neon/30 transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-neon text-sm" />
                  </span>
                  <span className="text-sm text-white/90">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Bouton */}
            <motion.div variants={staggerItem}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 btn btn-primary font-semibold hover:shadow-neon-glow-strong transition-all"
              >
                Discuter de votre projet
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;