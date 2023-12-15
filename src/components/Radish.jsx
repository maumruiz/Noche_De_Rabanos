import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

import Breadcrumbs from './Breadcrumbs'

export default function Radish(props) {
    const isCarving = useRef(false)
    const ref = useRef()
    const [carvingState, setCarvingState] = useState(0)
    let animationTime = 0;

    useFrame((state, delta) => {
        if (isCarving.current) {
            animationTime += delta
            if (animationTime > 2) {
                isCarving.current = false
                animationTime = 0
            }
        }

        ref.current.rotation.y += (delta * 0.4)
    })

    const carve = (event) => {
        if (isCarving.current || carvingState > 2)
            return
        isCarving.current = true
        setCarvingState(carvingState + 1)
    }

    return (
        <>
            <mesh
                {...props}
                ref={ref}
                onClick={(event) => carve(event)}
            >
                <boxGeometry args={[1, 2, 1]} />
                <meshStandardMaterial 
                    color={carvingState == 0 ? 'brown' : carvingState == 1 ? 'hotpink' : carvingState == 2 ? 'aqua' : 'orange'} />
            </mesh>
            <Breadcrumbs xStart={props.position[0]} />
        </>
    )
}