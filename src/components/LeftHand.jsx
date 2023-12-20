import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useScroll } from "@react-three/drei";

export function LeftHand(props) {
  const { nodes, materials } = useGLTF("/leftHand.glb");
  const { viewport } = useThree()
  const ref = useRef()
  const data = useScroll()
  useFrame(() => {
    ref.current.position.x = viewport.width*2 * data.offset + 0.1
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials.Radish}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001_1.geometry}
        material={materials.RadishPeeled}
      />
    </group>
  );
}

useGLTF.preload("/leftHand.glb");
