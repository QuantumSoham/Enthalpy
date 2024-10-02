import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const gltf = useGLTF(url);
  const ref = useRef();
  
  // Rotate the model continuously
  useFrame(() => {
    ref.current.rotation.y += 0.000;
  });

  return <primitive ref={ref} object={gltf.scene} position={[0, -8, -2]} rotation={[0, 0, 0]} />; // Ensure the model is upright and centered
}

export default function ModelViewer() {
  return (
    <Canvas
      className='ThreeCanvas' // Adjust canvas size if needed
      camera={{ position: [-10, 0, -20], fov: 40 }} // Adjust camera position and field of view
    >
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={5} />
      <Model url="/black_hawk.glb" />
      <OrbitControls />
    </Canvas>
  );
}
// import React, { useRef, useEffect, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function Model({ url, isAnimating }) {
//   const gltf = useGLTF(url);
//   const ref = useRef();

//   // Rotate the model continuously if isAnimating is true
//   useFrame(() => {
//     if (isAnimating) {
//       ref.current.rotation.y += 0.004;
//     }
//   });

//   return <primitive ref={ref} object={gltf.scene} position={[0, -8, -2]} rotation={[0, 0, 0]} />; // Ensure the model is upright and centered
// }

// export default function ModelViewer() {
//   const [isAnimating, setIsAnimating] = useState(false);
//   const canvasRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsAnimating(true);
//             setTimeout(() => {
//               setIsAnimating(false);
//             }, 6000); // Stop animation after 3 seconds
//           }
//         });
//       },
//       { threshold: 0.1 } // Adjust threshold as needed
//     );

//     if (canvasRef.current) {
//       observer.observe(canvasRef.current);
//     }

//     return () => {
//       if (canvasRef.current) {
//         observer.unobserve(canvasRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={canvasRef}>
//       <Canvas
//         className='ThreeCanvas' // Adjust canvas size if needed
//         camera={{ position: [-10, 0, -20], fov: 40 }} // Adjust camera position and field of view
//       >
//         <ambientLight intensity={1} />
//         <directionalLight position={[10, 10, 5]} intensity={5} />
//         <Model url="/black_hawk.glb" isAnimating={isAnimating} />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }
