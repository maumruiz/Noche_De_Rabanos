import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCompoundBody } from '@react-three/cannon'
import { useGLTF } from "@react-three/drei";

import Breadcrumbs from './Breadcrumbs'
import RadishMesh from './RadishMesh';

export default function Radish(props) {
    const { nodes, materials } = useGLTF("/rabano.glb");
    const isCarving = useRef(false)
    const [carvingState, setCarvingState] = useState(0)
    let animationTime = 0;

    const [ref, api] = useCompoundBody(() => ({
        mass: 0,
        position: props.position,
        shapes: [
            { type: 'Box', position: [0, -0.2, 0], args: [1, 1.8, 1] },
            { type: 'Sphere', position: [0, 1, 0], args: [0.55, 5] }
        ]
    }))

    useFrame((state, delta) => {
        if (isCarving.current) {
            animationTime += delta
            if (animationTime > 2) {
                isCarving.current = false
                animationTime = 0
            }
        }

        const t = state.clock.getElapsedTime()
        api.rotation.set(0, t * .5, 0)
    })

    const carve = (event) => {
        if (isCarving.current || carvingState > 2)
            return
        isCarving.current = true
        setCarvingState(carvingState + 1)
    }

    return (
        <>
            <group ref={ref} dispose={null} onClick={(event) => carve(event)}>
                <RadishMesh carvingState={carvingState}/>
            </group>
            <Breadcrumbs xStart={props.position[0]} carvingState={carvingState} />
        </>
    )
}