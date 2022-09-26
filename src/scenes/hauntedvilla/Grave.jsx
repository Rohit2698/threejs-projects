import { useLoader } from '@react-three/fiber';
import React from 'react';

const Grave = ({ position, rotation, map }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[0.6, 0.8, 0.2]} />
      <meshStandardMaterial color={'#ffffff79'} map={map} />
    </mesh>
  );
};

export default Grave;
