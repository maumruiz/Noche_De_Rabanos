import { useRef, useEffect } from "react";
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useScroll, useAnimations } from "@react-three/drei";

import { useSnapshot } from 'valtio'
import { appState } from '../store';

export function RightHand(props) {
  const ref = useRef()
  const { nodes, materials, animations } = useGLTF("/rightHand.glb");
  const { actions, names } = useAnimations(animations, ref);
  const { viewport } = useThree()
  const data = useScroll()
  const snap = useSnapshot(appState)

  useFrame(() => {
    ref.current.position.x = viewport.width * 2 * data.offset - 0.2
  })

  useEffect(() => {
    const action = snap.isCarving ? "RightHandCarve" : "RightHandIdle"
    actions[action].reset().fadeIn(0.5).play()

    return () => {
      const action = snap.isCarving ? "RightHandCarve" : "RightHandIdle"
      actions[action].fadeOut(0.5)
    }
  }, [snap.isCarving])

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="RightHand">
          <group name="RightHandMesh">
            <skinnedMesh
              name="Circle"
              geometry={nodes.Circle.geometry}
              material={materials.Radish}
              skeleton={nodes.Circle.skeleton}
            />
            <skinnedMesh
              name="Circle_1"
              geometry={nodes.Circle_1.geometry}
              material={materials.RadishPeeled}
              skeleton={nodes.Circle_1.skeleton}
            />
          </group>
          <primitive object={nodes.ForeArmr} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/rightHand.glb");
