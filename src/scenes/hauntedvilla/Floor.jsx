import { useFrame, useLoader } from '@react-three/fiber';
import React from 'react';
import { useRef } from 'react';
import { DoubleSide, NearestFilter, TextureLoader } from 'three';
import groundImage from '../../assets/textures/grass/normal.jpg';

const Floor = () => {
  const floorTexture = useLoader(TextureLoader, groundImage);
  const floorref = useRef();

  useFrame(() => {
    floorref.current.magFilter = NearestFilter;
  });
  return (
    <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        color={'green'}
        ref={floorref}
        side={DoubleSide}
        map={floorTexture}
        opacity={0.6}
        metalness={0.4}
        roughness={1}
      />
    </mesh>
  );
};

export default Floor;
