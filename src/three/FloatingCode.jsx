import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const CodeWindow = ({ position, delay = 0 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.2;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group position={position} ref={meshRef}>
        {/* Fenêtre de code */}
        <mesh>
          <planeGeometry args={[1.5, 1]} />
          <meshBasicMaterial color="#0A0A0A" transparent opacity={0.85} />
        </mesh>

        {/* Barre de titre */}
        <mesh position={[0, 0.45, 0.01]}>
          <planeGeometry args={[1.5, 0.1]} />
          <meshBasicMaterial color="#141414" transparent opacity={0.9} />
        </mesh>

        {/* Trois points (mac style) */}
        <mesh position={[-0.6, 0.45, 0.02]}>
          <circleGeometry args={[0.04, 16]} />
          <meshBasicMaterial color="#FF5F57" />
        </mesh>
        <mesh position={[-0.45, 0.45, 0.02]}>
          <circleGeometry args={[0.04, 16]} />
          <meshBasicMaterial color="#FEBC2E" />
        </mesh>
        <mesh position={[-0.3, 0.45, 0.02]}>
          <circleGeometry args={[0.04, 16]} />
          <meshBasicMaterial color="#28C840" />
        </mesh>

        {/* Lignes de code stylisées */}
        {[0.25, 0.15, 0.05, -0.05, -0.15, -0.25, -0.35].map((y, i) => (
          <mesh key={i} position={[-0.5 + (i % 3) * 0.15, y, 0.02]}>
            <planeGeometry args={[0.6 - (i % 3) * 0.15, 0.02]} />
            <meshBasicMaterial
              color={
                i % 3 === 0
                  ? '#A8FF00'
                  : i % 3 === 1
                  ? '#61DAFB'
                  : '#FFFFFF'
              }
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const FloatingCode = ({ isMobile }) => {
  if (isMobile) return null;

  return (
    <group>
      <CodeWindow position={[-3.5, 0.5, -0.5]} delay={0} />
      <CodeWindow position={[3.2, -0.8, -0.3]} delay={1.5} />
    </group>
  );
};

export default FloatingCode;