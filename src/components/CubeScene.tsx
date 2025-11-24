// src/components/CubeScene.tsx
'use client';
import { useRef } from 'react'; 
// useRef is used to create a reference to the cube mesh. 
// References are a way to access and interact with DOM (Document Object Model) elements or React components directly.

import { Canvas, useFrame } from '@react-three/fiber'; 
// Canvas is a component that sets up a 3D rendering context using Three.js. 
// useFrame is a hook that allows you to run code on every frame of the animation loop.
// The animation loop is a continuous cycle that updates the scene and renders it to the screen, typically running at 60 frames per second.
import { Mesh } from 'three'; 
import { OrbitControls, Stats } from '@react-three/drei';
// Mesh is a class from the Three.js library that represents a 3D object made up of geometry (shape) and material (appearance).

function Cube({ position}: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null!);
  // useFrame is a hook that runs on every rendered frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1]} />
      <meshStandardMaterial color={'royalblue'} />
    </mesh>
  );
}


export default function CubeScene({ n, resetKey }: { n: number, resetKey: number }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera ={{ position: [n * 1.5, n * 1.5, n * 1.5], fov: 50 }} key={resetKey}>
        <OrbitControls/>
        <Stats />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        {Array.from({ length: n }).map((_, i) =>
          Array.from({ length: n }).map((_, j) => (
            <Cube key={`${i}-${j}`} position={[(i-n/2) * 3, 0, (j-n/2) * 3]} />
          ))
        )}

        
      </Canvas>
    </div>
  );
}