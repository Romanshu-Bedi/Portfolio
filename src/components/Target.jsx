import React, { useEffect, useRef } from 'react'; // Added useEffect for animation
import gsap from 'gsap';


const Target = (props) => {
  const targetRef = useRef();

  useEffect(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []); // The empty dependency array ensures this runs once when the component mounts


  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.4}>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.08, 32]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.78, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.08, 32]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.86, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.08, 32]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.94, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.08, 32]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      <mesh rotation={[0, 0, 0]} position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 1.8, 16]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.2} roughness={0.4} />
      </mesh>
      <mesh rotation={[0, 0, 0]} position={[0, -1.4, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.12, 32]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
    </group>
  );
};

export default Target;
