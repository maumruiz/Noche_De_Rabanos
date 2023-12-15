import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Instances } from '@react-three/drei'

import Breadcrumb from './Breadcrumb'

export default function Breadcrumbs({xStart}) {
    console.log('breadcrumbs', xStart)
    const [breadcumbsArr, setBreadcrumbsArr] = useState([])
    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.computeBoundingSphere()
        // console.log(ref.current.boundingSphere)
    })

    useEffect(() => {
        // const breadcrumbs = Array.from({ length: 100 }, (r = 2) => ({
        //     position: [xStart + r / 2 - Math.random() * r, r / 2 - Math.random() * r + 0.5, r / 2 - Math.random() * r],
        //     rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
        // }))
        const breadcrumbs = []
        for(let i = 0; i < 50; i++) {
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
            limit={100}
            range={100}
        >
            <boxGeometry />
            <meshStandardMaterial />
            {breadcumbsArr.map((item, i) => (
                <Breadcrumb key={i} position={item.position} rotation={item.rotation} color="red" scale={0.2} />
            ))}
        </Instances>
    )
}