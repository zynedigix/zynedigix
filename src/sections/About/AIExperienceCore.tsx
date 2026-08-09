import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function CrystalCore() {
  return (
    <mesh rotation={[0.4, 0.5, 0]}>
      <icosahedronGeometry args={[1, 2]} />

      <meshPhysicalMaterial
        color="#7DF9FF"
        transparent
        opacity={0.55}
        roughness={0.1}
        metalness={0.8}
        transmission={1}
      />
    </mesh>
  );
}

export default function AIExperienceCore() {
  return (
    <div className="ai-core">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1} />

        <pointLight position={[3, 3, 3]} intensity={5} />

        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <CrystalCore />
        </Float>
      </Canvas>
    </div>
  );
}
