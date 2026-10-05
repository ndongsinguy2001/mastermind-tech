import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

const ParticleNetwork = ({ isMobile }) => {
  const pointsRef = useRef();
  const linesRef = useRef();

  // Nombre de particules (réduit sur mobile)
  const particleCount = isMobile ? 30 : 80;
  const connectionDistance = 2.5;

  // Générer les positions des particules
  const { positions, connections } = useMemo(() => {
    const positions = [];
    const connections = [];

    // Créer les particules dans un volume sphérique
    for (let i = 0; i < particleCount; i++) {
      const radius = 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions.push([x, y, z]);
    }

    // Créer les connexions entre particules proches
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const [x1, y1, z1] = positions[i];
        const [x2, y2, z2] = positions[j];
        const distance = Math.sqrt(
          Math.pow(x2 - x1, 2) +
            Math.pow(y2 - y1, 2) +
            Math.pow(z2 - z1, 2)
        );

        if (distance < connectionDistance) {
          connections.push([positions[i], positions[j]]);
        }
      }
    }

    return { positions, connections };
  }, [particleCount]);

  // Convertir les positions en Float32Array pour BufferGeometry
  const positionsArray = useMemo(() => {
    const array = new Float32Array(positions.length * 3);
    positions.forEach((pos, i) => {
      array[i * 3] = pos[0];
      array[i * 3 + 1] = pos[1];
      array[i * 3 + 2] = pos[2];
    });
    return array;
  }, [positions]);

  // Animation : rotation lente
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      linesRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <group>
      {/* Particules */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length}
            array={positionsArray}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#A8FF00"
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Lignes de connexion */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length * 2}
            array={
              new Float32Array(
                connections.flatMap(([p1, p2]) => [...p1, ...p2])
              )
            }
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#A8FF00"
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
};

export default ParticleNetwork;