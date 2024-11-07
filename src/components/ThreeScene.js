import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useDrag } from '@use-gesture/react';

function Model({ url }) {
  const gltf = useGLTF(url);
  const ref = useRef();
  const [position, setPosition] = useState([0, -90, 0]);

  // Handle drag gesture
  const bind = useDrag(({ offset: [x, y] }) => {
    setPosition([x / 100, -90, y / 100]);
  }, {
    onDragEnd: () => setPosition([0, -90, 0]) // Reset position on drag end
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={position}
      rotation={[0, 1, 0]}
      {...bind()} // Apply drag bindings
    />
  );
}

export default function ModelViewer() {
  return (
    <Canvas
      className='ThreeCanvas' // Adjust canvas size if needed
      camera={{ position: [10, 0, 400], fov: 25 }} // Move camera to the side for a side view
    >
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={5} />
      <Model url="/black_hawknew.glb" />
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






























// import React, { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { useDrag } from '@use-gesture/react';

// function Model({ url }) {
//   const gltf = useGLTF(url);
//   const ref = useRef();
//   const [position, setPosition] = useState([0, -90, 0]);
//   const [hovered, setHovered] = useState(false);  // Track hover state
//   const [error, setError] = useState(null);  // Track model loading errors

//   // Handle drag gesture
//   const bind = useDrag(({ offset: [x, y], memo = position }) => {
//     if (hovered) {
//       setPosition([x / 100, -90, y / 100]);
//     }
//     return memo;
//   }, {
//     onDragEnd: () => setPosition([0, -90, 0]) // Reset position on drag end
//   });

//   useEffect(() => {
//     if (gltf.error) {
//       setError('Failed to load the model');
//     }
//   }, [gltf]);

//   return (
//     <>
//       {error && <div style={{ color: 'red', position: 'absolute', top: '10px', left: '10px' }}>{error}</div>}
//       <primitive
//         ref={ref}
//         object={gltf.scene}
//         position={position}
//         rotation={[0, 1, 0]}
//         scale={1}  // Scale the model to a visible size
//         onPointerOver={() => setHovered(true)}  // Set hovered to true on mouse over
//         onPointerOut={() => setHovered(false)}  // Set hovered to false when mouse leaves
//         {...bind()} // Apply drag bindings only if hovered
//       />
//     </>
//   );
// }

// export default function ModelViewer() {
//   return (
//     <Canvas
//       className="ThreeCanvas"
//       camera={{ position: [10, 0, 400], fov: 25 }}  // Adjust camera position to fit the model
//     >
//       <ambientLight intensity={1} />
//       <directionalLight position={[10, 10, 5]} intensity={5} />
//       <Model url="/black_hawknew.glb" />
//       <OrbitControls />
//     </Canvas>
//   );
// }