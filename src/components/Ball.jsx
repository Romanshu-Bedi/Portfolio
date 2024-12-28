// src/components/Ball.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

// If you already have a separate loading component, import it here
// For example: import Loading from "./Loading";

const BallShape = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.2}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 0, 0.05]} intensity={1.2} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#f0f0f0"
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
      frameloop="always"
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