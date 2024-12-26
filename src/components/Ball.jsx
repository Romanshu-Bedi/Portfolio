// src/components/Ball.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

// If you already have a separate loading component, import it here
// For example: import Loading from "./Loading";

const BallShape = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Changed ambientLight from 0.25 to 0.5 */}
      <ambientLight intensity={0.5} />

      {/* Added intensity={1} to directionalLight, position remains the same */}
      <directionalLight position={[0, 0, 0.05]} intensity={1} />

      <mesh castShadow receiveShadow scale={2.75}>
        {/* Changed color from "#fff8eb" to "#ffffff" */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const Ball = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null /* or <Loading /> if you have one */}>
        <OrbitControls enableZoom={false} />
        <BallShape imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Ball;
