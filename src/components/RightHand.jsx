import React, { useRef } from "react";
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useScroll } from "@react-three/drei";

export function RightHand(props) {
  const { nodes, materials } = useGLTF("/rightHand.glb");
  const { viewport } = useThree()
  const ref = useRef()
  const data = useScroll()

  useFrame(() => {
    ref.current.position.x = viewport.width*2 * data.offset - 0.3
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.Radish}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_1.geometry}
        material={materials.RadishPeeled}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knife_smooth_1.geometry}
        material={materials.Gray3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knife_smooth_2.geometry}
        material={materials.Gray5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knife_smooth_3.geometry}
        material={materials.WarmGray8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knife_smooth_4.geometry}
        material={materials.Gray4}
      />
    </group>
  );
}

useGLTF.preload("/rightHand.glb");
