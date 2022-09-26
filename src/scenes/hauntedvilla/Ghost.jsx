import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ghostModal from '../../assets/model/ghost/ghost2.glb';
import ghostModal2 from '../../assets/model/ghost/ghost.glb';
import { useRef } from 'react';

const Ghost = ({ type, position }) => {
  const ghost1 = useLoader(GLTFLoader, ghostModal);
  const ghost2 = useLoader(GLTFLoader, ghostModal2);
  const ghost1Ref = useRef();
  const pointLightRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (type === 'ghost2') {
      ghost1Ref.current.position.x = Math.sin(elapsedTime) * 5.5;
      ghost1Ref.current.position.y = Math.abs(Math.cos(elapsedTime)) * 1.5 + 0;
      ghost1Ref.current.position.z = Math.cos(elapsedTime) * 8.5;

      pointLightRef.current.position.x = Math.sin(elapsedTime) * 5.5;
      pointLightRef.current.position.y = Math.abs(Math.cos(elapsedTime)) * 1.5 + 0.5;
      pointLightRef.current.position.z = Math.cos(elapsedTime) * 8.5;
    }

    if (type === 'ghost1') {
      ghost1Ref.current.position.y = Math.abs(Math.cos(elapsedTime)) * 1;
    }
  });

  if (type === 'ghost1') {
    return (
      <>
        <pointLight ref={pointLightRef} position={position} color={'red'} />
        <mesh ref={ghost1Ref} scale={0.006} position={position}>
          <primitive object={ghost1.scene} />
        </mesh>
      </>
    );
  }

  return (
    <>
      <pointLight ref={pointLightRef} position={position} color={'white'} intensity={0.3} />
      <mesh ref={ghost1Ref} position={position}>
        <primitive object={ghost2.scene} />
      </mesh>
    </>
  );
};

export default Ghost;
