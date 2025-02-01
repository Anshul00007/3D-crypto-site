import { Canvas } from '@react-three/fiber';
import { OrbitControls, Torus } from '@react-three/drei';
import { Suspense } from 'react';
import { EffectComposer, Bloom, Glitch } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

const Crypto3DModel = () => {
  return (
    <Canvas className="w-full h-[500px]">
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={6} color="#FFD700" />
        <pointLight position={[-3, -3, -3]} intensity={6} color="#FFD700" />
        <pointLight position={[0, 5, 0]} intensity={5} color="#FFD700" />

        <group position={[0, 0, 0]}>
          <Torus args={[3, 0.03, 16, 100]} rotation={[0, 0, Math.PI / 3]}>
            <meshStandardMaterial
              attach="material"
              color="#FFD700" 
              emissive="#FFD700" 
              emissiveIntensity={30} 
              opacity={0.3} 
              transparent={true}
              roughness={0.05} 
              metalness={1} 
            />
          </Torus>
          <Torus args={[3, 0.03, 16, 100]} rotation={[0, 0, -Math.PI / 3]}>
            <meshStandardMaterial
              attach="material"
              color="#FFD700" 
              emissive="#FFD700" 
              emissiveIntensity={30} 
              opacity={0.3} 
              transparent={true}
              roughness={0.05}
              metalness={1}
            />
          </Torus>
          <Torus args={[3, 0.03, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
            <meshStandardMaterial
              attach="material"
              color="#FFD700" 
              emissive="#FFD700" 
              emissiveIntensity={30} 
              opacity={0.3} 
              transparent={true}
              roughness={0.05}
              metalness={1}
            />
          </Torus>
        </group>

        <EffectComposer>
          <Bloom 
            blendFunction={BlendFunction.ADD} 
            intensity={6} 
            luminanceThreshold={0.15}  
            luminanceSmoothing={0.85}  
          />
          <Glitch 
            delay={[0.4, 1.2]}  
            duration={[0.1, 0.25]}  
            strength={[0.3, 0.5]} 
          />
        </EffectComposer>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
      </Suspense>
    </Canvas>
  );
};

export default Crypto3DModel;
