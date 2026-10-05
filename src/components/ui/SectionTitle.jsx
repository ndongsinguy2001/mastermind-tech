import { motion } from 'framer-motion';
import { slideUp, staggerContainer } from '../../animations/variants';

const SectionTitle = ({ 
  label, 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`max-w-3xl mb-16 ${alignment} ${className}`}
    >
      {label && (
        <motion.p
          variants={slideUp}
          className="text-neon text-xs tracking-[0.3em] font-medium mb-4"
        >
          {label}
        </motion.p>
      )}
      
      {title && (
        <motion.h2
          variants={slideUp}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6"
        >
          {title}
        </motion.h2>
      )}
      
      {subtitle && (
        <motion.p
          variants={slideUp}
          className="text-text-muted text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {align === 'center' && (
        <motion.div
          variants={slideUp}
          className="w-20 h-1 bg-neon mx-auto mt-6 rounded-full shadow-neon-glow"
        />
      )}
    </motion.div>
  );
};

export default SectionTitle;