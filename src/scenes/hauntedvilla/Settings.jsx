import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useState } from 'react';
import { DoubleSide, TextureLoader } from 'three';
import soundOnImage from '../../assets/textures/sound/soundon.png';
import rotationOnImage from '../../assets/textures/rotation/rotation.png';
import soundOffImage from '../../assets/textures/sound/soundoff.png';
import { useAudio } from '../../util/Hooks';
import ghostSound from '../../assets/sound/ghost.mp3';

const Settings = ({ autoRotate, setAutoRotate }) => {
  const soundOnTetxure = useLoader(TextureLoader, soundOnImage);
  const rotationOnTetxure = useLoader(TextureLoader, rotationOnImage);
  const soundOffTetxure = useLoader(TextureLoader, soundOffImage);
  const soundRef = useRef();
  const [hover, setHover] = useState(false);
  const [hoverRotation, setHoverRotation] = useState(false);
  const [active, toggle] = useAudio(ghostSound);

  useFrame(({ clock }) => {
    const elapsedTime = clock.elapsedTime;
    soundRef.current.position.y = Math.abs(Math.sin(elapsedTime)) * 0.5 + 3.5;
  });

  return (
    <group ref={soundRef}>
      <mesh
        onPointerOver={() => {
          setHover(true);
        }}
        onClick={() => {
          toggle();
        }}
        onPointerLeave={() => {
          setHover(false);
        }}
        scale={hover ? 1.5 : 1}
        position={[4.4, 0, 0.5]}
      >
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial
          side={DoubleSide}
          map={active ? soundOnTetxure : soundOffTetxure}
          color={'red'}
        />
      </mesh>
      <mesh
        onPointerOver={() => {
          setHoverRotation(true);
        }}
        onClick={() => {
          setAutoRotate(!autoRotate);
        }}
        onPointerLeave={() => {
          setHoverRotation(false);
        }}
        scale={hoverRotation ? 1.2 : 1}
        position={[5.6, 0, 0.5]}
      >
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial
          side={DoubleSide}
          map={rotationOnTetxure}
          color={autoRotate ? 'red' : 'white'}
        />
      </mesh>
    </group>
  );
};

export default Settings;
