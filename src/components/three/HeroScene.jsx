import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function createNodes(count) {
  return Array.from({ length: count }, (_, index) => {
    const y = 1 - (index / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const angle = Math.PI * (1 + Math.sqrt(5)) * index;
    const depth = 1.02 + ((index * 7) % 5) * 0.035;

    return [
      Math.cos(angle) * radius * depth,
      y * depth,
      Math.sin(angle) * radius * depth,
    ];
  });
}

function createEdges(nodes) {
  const edges = [];
  const connected = new Set();

  nodes.forEach((point, index) => {
    const nearest = nodes
      .map((other, otherIndex) => ({
        other,
        otherIndex,
        distance:
          (point[0] - other[0]) ** 2 +
          (point[1] - other[1]) ** 2 +
          (point[2] - other[2]) ** 2,
      }))
      .filter(({ otherIndex }) => otherIndex !== index)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);

    nearest.forEach(({ other, otherIndex }) => {
      const key = `${Math.min(index, otherIndex)}:${Math.max(index, otherIndex)}`;

      if (connected.has(key)) return;
      connected.add(key);
      edges.push(...point, ...other);
    });
  });

  return new Float32Array(edges);
}

function createParticles(count) {
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const offset = index * 3;
    positions[offset] = Math.sin(index * 127.1) * 1.75;
    positions[offset + 1] = Math.sin(index * 311.7) * 1.75;
    positions[offset + 2] = Math.cos(index * 74.7) * 1.75;
  }

  return positions;
}

function NeuralNetwork({ compact, reducedMotion }) {
  const networkRef = useRef(null);
  const animationTime = useRef(0);
  const nodeCount = compact ? 18 : 32;
  const particleCount = compact ? 16 : 34;
  const nodes = useMemo(() => createNodes(nodeCount), [nodeCount]);
  const edges = useMemo(() => createEdges(nodes), [nodes]);
  const particles = useMemo(
    () => createParticles(particleCount),
    [particleCount],
  );

  useFrame(({ pointer }, delta) => {
    if (!networkRef.current || reducedMotion) return;

    animationTime.current += delta;
    const time = animationTime.current;
    networkRef.current.rotation.y =
      Math.sin(time * 0.16) * 0.16 + pointer.x * 0.18;
    networkRef.current.rotation.x =
      Math.cos(time * 0.13) * 0.08 + pointer.y * 0.12;
  });

  return (
    <group ref={networkRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edges, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#818cf8"
          size={0.018}
          transparent
          opacity={0.48}
          sizeAttenuation
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edges, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.34}
        />
      </lineSegments>

      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          <icosahedronGeometry args={[index % 5 === 0 ? 0.052 : 0.034, 1]} />
          <meshBasicMaterial
            color={index % 4 === 0 ? '#22d3ee' : '#a5b4fc'}
            toneMapped={false}
          />
        </mesh>
      ))}

      <mesh>
        <icosahedronGeometry args={[0.66, 2]} />
        <meshBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.16}
          wireframe
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.25, 24, 24]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>

      <mesh rotation={[0.7, 0.2, 0.35]}>
        <torusGeometry args={[1.42, 0.008, 6, 96]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.34}
        />
      </mesh>

      <mesh rotation={[1.1, 0.8, -0.2]}>
        <torusGeometry args={[1.54, 0.006, 6, 96]} />
        <meshBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.42}
        />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#22d3ee"
          size={0.022}
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function HeroScene({ compact, reducedMotion, fallback }) {
  return (
    <Canvas
      className="hero-canvas"
      camera={{ position: [0, 0, 4.2], fov: 40 }}
      dpr={compact ? [1, 1.2] : [1, 1.5]}
      frameloop={reducedMotion ? 'demand' : 'always'}
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      fallback={fallback}
    >
      <NeuralNetwork compact={compact} reducedMotion={reducedMotion} />
    </Canvas>
  );
}

export default HeroScene;
