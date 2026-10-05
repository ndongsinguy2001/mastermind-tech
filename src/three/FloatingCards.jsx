import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const TechCard = ({ position, color, delay = 0 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.15;
      meshRef.current.rotation.x =
        Math.cos(state.clock.elapsedTime * 0.4 + delay) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        {/* Fond de la carte */}
        <mesh ref={meshRef}>
          <planeGeometry args={[1.2, 0.7]} />
          <meshBasicMaterial color="#0A0A0A" transparent opacity={0.92} />
        </mesh>

        {/* Bordure néon */}
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(1.2, 0.7)]} />
          <lineBasicMaterial color={color} transparent opacity={0.9} />
        </lineSegments>

        {/* Barres stylisées à la place du texte */}
        <group position={[0, 0, 0.01]}>
          {/* Barre principale */}
          <mesh position={[0, 0.1, 0]}>
            <planeGeometry args={[0.7, 0.06]} />
            <meshBasicMaterial color={color} transparent opacity={0.9} />
          </mesh>
          {/* Barre secondaire */}
          <mesh position={[-0.1, -0.1, 0]}>
            <planeGeometry args={[0.5, 0.04]} />
            <meshBasicMaterial color={color} transparent opacity={0.5} />
          </mesh>
          {/* Petit point lumineux */}
          <mesh position={[0.4, 0.15, 0]}>
            <circleGeometry args={[0.05, 16]} />
            <meshBasicMaterial color={color} transparent opacity={0.9} />
          </mesh>
        </group>
      </group>
    </Float>
  );
};

const FloatingCards = ({ isMobile }) => {
  const cards = [
    {
      position: [-3.2, 1.8, 1],
      color: '#61DAFB',
      delay: 0,
    },
    {
      position: [3.2, 1.5, 0.8],
      color: '#339933',
      delay: 1,
    },
    {
      position: [-3, -1.8, 0.9],
      color: '#47A248',
      delay: 2,
    },
    {
      position: [3, -1.6, 1.1],
      color: '#FFFFFF',
      delay: 3,
    },
  ];

  const displayedCards = isMobile ? cards.slice(0, 2) : cards;

  return (
    <group>
      {displayedCards.map((card, i) => (
        <TechCard key={i} {...card} />
      ))}
    </group>
  );
};

export default FloatingCards;