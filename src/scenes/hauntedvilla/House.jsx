import { useLoader } from '@react-three/fiber';
import React from 'react';
import { useHelper } from '@react-three/drei';
import { DoubleSide, PointLightHelper, TextureLoader } from 'three';
import Stone from './Stone';
import wallImage from '../../assets/textures/walls/wall.JPG';
import roofImage from '../../assets/textures/roof/roof.JPG';
import stoneImage from '../../assets/textures/stone/stone.JPG';
import doorImage from '../../assets/textures/door/door.JPG';
import { useRef } from 'react';

const House = () => {
  const wallTexture = useLoader(TextureLoader, wallImage);
  const roofTexture = useLoader(TextureLoader, roofImage);
  const stoneTexture = useLoader(TextureLoader, stoneImage);
  const doorTexture = useLoader(TextureLoader, doorImage);
  const pointLight = useRef();

  useHelper(pointLight, PointLightHelper, 0, 0.5, 'red');
  return (
    <group position={[0, 1.01, 0]}>
      <pointLight ref={pointLight} color={'white'} position={[0, 1, 3]} intensity={1} />
      <mesh>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial color={'grey'} map={wallTexture} />
      </mesh>
      {/*roof */}
      <mesh rotation={[0, 2.36, 0]} position={[0, 1.5, 0]}>
        <coneGeometry args={[3, 1, 4]} />
        <meshStandardMaterial map={roofTexture}  roughness={1} />
      </mesh>
      {/*door*/}
      <mesh position={[0, -0.24, 1.54]}>
        <planeGeometry args={[1, 1.5]} />
        <meshStandardMaterial side={DoubleSide} color={'grey'} map={doorTexture} />
      </mesh>
      <group>
        <Stone position={[-1.2, -1, 1.8]} color={'brown'} map={stoneTexture} />
        <Stone position={[-0.7, -1, 1.8]} color={'brown'} map={stoneTexture} />
        <Stone position={[1.2, -1, 1.8]} color={'brown'} map={stoneTexture} />
      </group>
    </group>
  );
};

export default House;
