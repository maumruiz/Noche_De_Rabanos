import { useEffect } from 'react'
import { Instance } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

export default function Breadcrumb(props) {

    const [ref, api] = useBox(() => ({
        mass: 1,
        args: [0.2, 0.15, 0.5],
        position: props.position,
        rotation: props.rotation
    }))

    useEffect(() => {
        api.applyImpulse([(Math.random() - 0.5) * 2, Math.random() * 4 + 1, (Math.random() - 0.5) * 2], [0, 0, 0])
    }, [])

    return (
        <Instance ref={ref}/>
    )
}