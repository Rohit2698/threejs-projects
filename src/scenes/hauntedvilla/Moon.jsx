import { useLoader } from '@react-three/fiber';
import React from 'react';
import { TextureLoader } from 'three';
import moonImage from '../../assets/textures/moon/redmoon.png';

const Moon = () => {
  const moonTexture = useLoader(TextureLoader, moonImage);
  return (
    <>
      <directionalLight position={[2.5, 6.5, -13.5]} color={'red'} intensity={0.57}/>
      <mesh position={[2.5, 6.5, -13.5]}>
        <sphereGeometry args={[1, 32, 10]} />
        <meshStandardMaterial map={moonTexture} color={'red'} />
      </mesh>
    </>
  );
};

export default Moon;
