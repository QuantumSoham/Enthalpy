import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const gltf = useGLTF(url);
  const ref = useRef();
  
  // Optional: Rotate the model continuously
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return <primitive ref={ref} object={gltf.scene} />;
}

export default function ModelViewer() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model url="./untitled.blend"/>
      <OrbitControls />
    </Canvas>
  );
}
