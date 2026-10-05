import { useState, useEffect } from 'react';

/**
 * Hook qui détecte si l'utilisateur préfère réduire les animations.
 * Utile pour l'accessibilité (respect de prefers-reduced-motion).
 * 
 * @returns {boolean} - true si l'utilisateur préfère réduire les animations
 */
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
};