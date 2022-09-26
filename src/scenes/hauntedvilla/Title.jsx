import { extend, useFrame } from '@react-three/fiber';
import React from 'react';
import crrepster from '../../assets/font/Creepster_Regular.json';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { useRef } from 'react';

extend({
  TextGeometry,
});
const Title = () => {
  const font = new FontLoader().parse(crrepster);
  const titleRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.elapsedTime;
    titleRef.current.position.y = Math.abs(Math.sin(elapsedTime)) * 0.5 + 3;
  });

  return (
    <mesh ref={titleRef} position={[-3, 4, 0]}>
      <textGeometry
        args={[
          'The haunted',
          {
            font,
            size: 1,
            height: 1,
          },
        ]}
      />
      <meshPhysicalMaterial attach={'material'} color={'red'} />
    </mesh>
  );
};

export default Title;
