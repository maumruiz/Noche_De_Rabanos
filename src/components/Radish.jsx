import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCompoundBody } from '@react-three/cannon'

import Breadcrumbs from './Breadcrumbs'
import RadishMesh from './RadishMesh';
import DancerMesh from './DancerMesh';
import FlorDePinaMesh from './FlorDePinaMesh';
import MarmotaMesh from './MarmotaMesh';

import { appState } from '../store';

export default function Radish(props) {
    const [carvingState, setCarvingState] = useState(0)

    const [ref, api] = useCompoundBody(() => ({
        mass: 0,
        position: props.position,
        shapes: [
            { type: 'Box', position: [0, -0.2, 0], args: [1, 1.8, 1] },
            { type: 'Sphere', position: [0, 1, 0], args: [0.55, 5] }
        ]
    }))

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
        api.rotation.set(0, t * .7, 0)
    })

    const carve = (event) => {
        if (appState.isCarving || carvingState > 2)
            return
        if(carvingState == 2)
            appState.carvingDone[props.radishIndex] = true

        appState.isCarving = true
        appState.carvingIndex = props.radishIndex
        setTimeout(() => {
            appState.isCarving = false
        }, 2000)
        setTimeout(() => {
            setCarvingState(carvingState + 1)
        }, 700)        
    }

    return (
        <>
            <group ref={ref} dispose={null} onClick={(event) => carve(event)}>
                <RadishMesh carvingState={carvingState} />
                {
                    props.radishIndex == 1 ? <FlorDePinaMesh carvingState={carvingState} />
                    : props.radishIndex == 2 ? <MarmotaMesh carvingState={carvingState} />
                    : <DancerMesh carvingState={carvingState} />
                }

            </group>
            <Breadcrumbs xStart={props.position[0]} carvingState={carvingState} />
        </>
    )
}