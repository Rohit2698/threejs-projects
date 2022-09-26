import React from 'react';

const Stone = ({ position, color, map }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.3]} />
      <meshStandardMaterial color={color} map={map} />
    </mesh>
  );
};

export default Stone;
