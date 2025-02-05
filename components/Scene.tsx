"use client";

import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function OptimusPrime() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.8}
          roughness={0.2}
          emissive="#FFD700"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function CyberpunkGrid() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshStandardMaterial
        color="#FFD700"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <fog attach="fog" args={['#000000', 5, 15]} />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#007BFF" />
      
      <OptimusPrime />
      <CyberpunkGrid />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}