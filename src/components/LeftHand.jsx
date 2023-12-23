import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useScroll, useAnimations } from "@react-three/drei";

import { useSnapshot } from 'valtio'
import { appState } from '../store';

export function LeftHand(props) {
  const ref = useRef()
  const { nodes, materials, animations } = useGLTF("/leftHand.glb");
  const { actions, names } = useAnimations(animations, ref);
  const { viewport } = useThree()

  const data = useScroll()
  const snap = useSnapshot(appState)

  useFrame((state, delta) => {
    if (!snap.isCarving) {
      let targetX = viewport.width * 2 * data.offset
      let diffX = targetX - ref.current.position.x
      let targetY = props.position[1]
      let diffY = targetY - ref.current.position.y
      let targetZ = props.position[2]
      let diffZ = targetZ - ref.current.position.z

      ref.current.position.x += (diffX * 10 * delta)
      ref.current.position.y += (diffY * 10 * delta)
      ref.current.position.z += (diffZ * 10 * delta)
    }
    else {
      let targetX = viewport.width * 2 * (snap.carvingIndex / 2)
      let diffX = targetX - ref.current.position.x
      let targetY = -0.5
      let diffY = targetY - ref.current.position.y
      let targetZ = 0
      let diffZ = targetZ - ref.current.position.z

      // + 0.2
      ref.current.position.x += (diffX * 10 * delta)
      ref.current.position.y += (diffY * 10 * delta)
      ref.current.position.z += (diffZ * 10 * delta)
    }
  })

  useEffect(() => {
    const action = snap.isCarving ? "LeftHandCarve" : "LeftHandIdle"
    actions[action].reset().fadeIn(0.5).play()

    return () => {
      const action = snap.isCarving ? "LeftHandCarve" : "LeftHandIdle"
      actions[action]?.fadeOut(0.5)
    }
  }, [snap.isCarving])

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="LeftHand">
          <group name="LeftHandMesh">
            <skinnedMesh
              name="LeftHandGeo001"
              geometry={nodes.LeftHandGeo001.geometry}
              material={materials["Radish.001"]}
              skeleton={nodes.LeftHandGeo001.skeleton}
            />
            <skinnedMesh
              name="LeftHandGeo001_1"
              geometry={nodes.LeftHandGeo001_1.geometry}
              material={materials["RadishPeeled.001"]}
              skeleton={nodes.LeftHandGeo001_1.skeleton}
            />
          </group>
          <primitive object={nodes.ForeArml} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/leftHand.glb");
