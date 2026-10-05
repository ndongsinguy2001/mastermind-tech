// ============================================================
// VARIANTES FRAMER MOTION RÉUTILISABLES
// ============================================================

// Fade in simple
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide up (apparition depuis le bas)
export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide down
export const slideDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide from left
export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide from right
export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Zoom in
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Container avec stagger (pour animer les enfants en cascade)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

// Container avec stagger rapide
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    }
  }
};

// Item enfant pour stagger
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Scale au hover (pour les cartes)
export const hoverScale = {
  whileHover: { 
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  whileTap: { scale: 0.98 }
};

// Lift au hover (translation vers le haut)
export const hoverLift = {
  whileHover: { 
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Configuration viewport standard
export const viewportConfig = {
  once: true,
  amount: 0.2,
};

// Configuration viewport pour les sections (moins exigeant)
export const viewportConfigLight = {
  once: true,
  amount: 0.1,
};