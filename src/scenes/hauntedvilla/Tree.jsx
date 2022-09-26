import { useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import tree from '../../assets/model/tree/tree1.glb';

const Tree = ({ position }) => {
  const treeModal = useLoader(GLTFLoader, tree);
  return (
    <>
      <pointLight color={'black'} position={position} />
      <mesh scale={2} position={position}>
        <primitive object={treeModal.scene} />
        <meshStandardMaterial color={'black'} />
      </mesh>
    </>
  );
};

export default Tree;
