import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Instances } from '@react-three/drei'

import Breadcrumb from './Breadcrumb'

export default function Breadcrumbs({xStart, carvingState}) {
    console.log('breadcrumbs', xStart)
    const [breadcumbsArr, setBreadcrumbsArr] = useState([])
    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.computeBoundingSphere()
    })

    useEffect(() => {
        const breadcrumbs = []
        for(let i = 0; i < 90; i++) {
            const angle = Math.random() * Math.PI * 2
            const radius = 1 + Math.random() * 0.5
            const x = Math.sin(angle) * radius + xStart
            const z = Math.cos(angle) * radius
            const y = Math.random() * 1.7
            breadcrumbs.push({
                position: [x, y, z],
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
            })
        }
        setBreadcrumbsArr((b) => breadcrumbs)
    }, [])

    return (
        <Instances
            ref={ref}
            limit={90}
            range={90}
        >
            <boxGeometry />
            <meshStandardMaterial />
            {
                breadcumbsArr.map((item, i) => (
                    i < carvingState * 30 ?
                        <Breadcrumb key={i} position={item.position} rotation={item.rotation} color="red" scale={0.2} />
                        : null
                ))
            }
        </Instances>
    )
}