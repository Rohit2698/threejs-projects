import React, { Suspense, useEffect } from 'react';
import './style.css';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useState } from 'react';
import { TextureLoader } from 'three';
import Floor from './Floor';
import House from './House';
import Grave from './Grave';
import graveImage from '../../assets/textures/grave/grave.JPG';
import Moon from './Moon';
import Ghost from './Ghost';
import Tree from './Tree';
import Title from './Title';
import Settings from './Settings';
import { useCallback } from 'react';

const HauntedVilla = () => {
  const [screenSize, setScreenSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [autoRotate, setAutoRotate] = useState(true);

  const graveTexture = useLoader(TextureLoader, graveImage);

  useEffect(() => {
    const resizeScreen = window.addEventListener('resize', () => {
      setScreenSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });
    return () => {
      window.removeEventListener('resize', resizeScreen);
    };
  }, []);

  const getGravePosition = () => {
    const angle = Math.random() * Math.PI * 10;
    const radius = Math.random() * 7 + 2.5;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return [x, 0.4, z];
  };

  const renderGraves = useCallback(() => {
    return (
      <group>
        {Array(50)
          .fill(1)
          .map((_, index) => (
            <Grave
              key={`grave-${index}`}
              position={getGravePosition()}
              map={graveTexture}
              rotation={[0, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4]}
            />
          ))}
      </group>
    );
  }, []);

  return (
    <div className='container'>
      <Suspense fallback={<h1 style={{ color: 'white' }}>Loading</h1>}>
        <Canvas
          style={{
            height: screenSize.height,
            width: screenSize.width,
          }}
        >
          <PerspectiveCamera
            aspect={screenSize.width / screenSize.height}
            makeDefault
            position={[7, 2, 10]}
          />
          <Settings autoRotate={autoRotate} setAutoRotate={setAutoRotate} />
          <Title />
          <Moon />
          <House />
          <Floor />
          <Ghost type={'ghost1'} position={[4, 0.6, 5]} />
          <Ghost type={'ghost2'} position={[-5, -4, 0]} />
          <Tree position={[5, 2, -20]} key={Math.random()} />
          {renderGraves()}
          <ambientLight color={'#fff'} intensity={0} />
          <OrbitControls
            autoRotate={autoRotate}
            autoRotateSpeed={2}
            enableDamping
            enablePan
            maxPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HauntedVilla;
