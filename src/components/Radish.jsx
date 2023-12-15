import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCompoundBody } from '@react-three/cannon'

import Breadcrumbs from './Breadcrumbs'

export default function Radish(props) {
    const isCarving = useRef(false)
    const [carvingState, setCarvingState] = useState(0)
    let animationTime = 0;

    const [ref, api] = useCompoundBody(() => ({
        mass: 0,
        position: props.position,
        shapes: [
            {type: 'Box', position: [0,0,0], args: [1,2,1]},
            {type: 'Sphere', position: [0,1,0], args: [0.55, 5]}
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
            <mesh ref={ref} onClick={(event) => carve(event)}>
                <boxGeometry args={[1, 2, 1]} />
                <meshStandardMaterial
                    color={carvingState == 0 ? 'brown' : carvingState == 1 ? 'hotpink' : carvingState == 2 ? 'aqua' : 'orange'}
                />
            </mesh>
            <Breadcrumbs xStart={props.position[0]} />
        </>
    )
}