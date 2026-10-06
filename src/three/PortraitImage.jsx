import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import portraitUrl from '../assets/images/portrait.png';

const PortraitImage = ({ isMobile }) => {
  const portraitRef = useRef();
  const groupRef = useRef();
  const [texture, setTexture] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      portraitUrl,
      (loadedTexture) => {
        loadedTexture.colorSpace = THREE.SRGBColorSpace;
        loadedTexture.anisotropy = 8;
        console.log('✅ Photo chargée avec succès');
        setTexture(loadedTexture);
      },
      undefined,
      (err) => {
        console.error('❌ Erreur de chargement de la photo :', err);
        setError(true);
      }
    );
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (portraitRef.current) {
      portraitRef.current.position.y = Math.sin(t * 0.6) * 0.05;
      portraitRef.current.rotation.z = Math.sin(t * 0.4) * 0.01;
    }

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

  if (error || !texture) return null;

  const imageAspect = texture.image
    ? texture.image.width / texture.image.height
    : 0.75;

  const planeHeight = isMobile ? 3.2 : 4;
  const planeWidth = planeHeight * imageAspect;

  return (
    <group ref={groupRef} position={[0, 0, -0.5]}>
      <mesh ref={portraitRef} position={[0, 0, 0]}>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.05}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

export default PortraitImage;