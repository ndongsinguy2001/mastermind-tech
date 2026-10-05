import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
import { services } from '../data/agencyData';
import { staggerContainer, staggerItem } from '../animations/variants';

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6">
      <div className="container-custom">
        <SectionTitle
          label="NOS SERVICES"
          title={
            <>
              Des solutions digitales
              <br />
              <span className="text-neon">pensées pour votre activité</span>
            </>
          }
          subtitle="Nous concevons des outils sur mesure qui répondent aux besoins réels de votre entreprise, de la conception à la maintenance."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const IconComponent = FiIcons[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative glass p-8 rounded-2xl border border-white/5 hover:border-neon/50 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Numéro en filigrane */}
                <div className="absolute top-6 right-6 text-5xl font-display font-bold text-white/5 group-hover:text-neon/10 transition-colors duration-500">
                  {service.number}
                </div>

                {/* Glow au hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icône */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors">
                  {IconComponent && <IconComponent className="text-neon text-2xl" />}
                </div>

                {/* Contenu */}
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold mb-3 text-white flex items-center gap-2">
                    {service.title}
                    <FiArrowUpRight className="text-neon opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tech badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon/5 border border-neon/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                    <span className="text-xs text-neon/90 font-medium">
                      {service.tech}
                    </span>
                  </div>
                </div>

                {/* Bordure lumineuse animée en bas */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-neon transition-all duration-500 group-hover:w-full shadow-neon-glow" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;