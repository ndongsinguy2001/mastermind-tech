import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import ParticleNetwork from './ParticleNetwork';
import FloatingCards from './FloatingCards';
import PortraitHalo from './PortraitHalo';
import PortraitImage from './PortraitImage';
import FloatingCode from './FloatingCode';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const HeroScene = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReducedMotion = usePrefersReducedMotion();

  // Fallback pour les utilisateurs qui préfèrent réduire les animations
  if (prefersReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-neon/20 blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Éclairage ambiant */}
          <ambientLight intensity={0.5} />

          {/* Réseau de particules (décor) */}
          <ParticleNetwork isMobile={isMobile} />

          {/* Halo vert pulsant */}
          <PortraitHalo isMobile={isMobile} />

          {/* Photo du fondateur */}
          <PortraitImage isMobile={isMobile} />

          {/* Cartes technologiques flottantes */}
          <FloatingCards isMobile={isMobile} />

          {/* Fenêtres de code flottantes */}
          <FloatingCode isMobile={isMobile} />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;