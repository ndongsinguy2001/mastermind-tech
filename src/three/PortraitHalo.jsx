import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PortraitHalo = ({ isMobile }) => {
  const haloRef = useRef();
  const innerHaloRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Pulsation du halo extérieur
    if (haloRef.current) {
      const scale = 1 + Math.sin(t * 0.8) * 0.05;
      haloRef.current.scale.set(scale, scale, scale);
    }

    // Pulsation du halo intérieur
    if (innerHaloRef.current) {
      const scale = 1 + Math.sin(t * 1.2) * 0.08;
      innerHaloRef.current.scale.set(scale, scale, scale);
    }

    // Parallaxe légère avec la souris
    if (groupRef.current) {
      const pointerX = state.pointer.x * 0.15;
      const pointerY = state.pointer.y * 0.15;
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        pointerX,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        pointerY,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -0.5]}>
      {/* Halo extérieur */}
      <mesh ref={haloRef} position={[0, 0, -1.5]}>
        <sphereGeometry args={[2.8, 32, 32]} />
        <meshBasicMaterial
          color="#A8FF00"
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>

      {/* Halo intérieur */}
      <mesh ref={innerHaloRef} position={[0, 0, -1.2]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#A8FF00"
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </mesh>

      {/* Cœur lumineux */}
      <mesh position={[0, 0, -0.8]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial
          color="#A8FF00"
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

export default PortraitHalo;