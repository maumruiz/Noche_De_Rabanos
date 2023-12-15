import { useThree } from '@react-three/fiber'
import { useBox, usePlane } from '@react-three/cannon'

export default function Table(props) {
    const { viewport } = useThree()

    const [ref] = useBox(() => ({ ...props, args: [viewport.width * 3, 0.8, 3] }))
    const [planeRef] = usePlane(() => ({ rotation:[-Math.PI / 2, 0, 0], position:[0, -10, 0] }))

    return (
        <>
            <mesh receiveShadow castShadow ref={ref}>
                <boxGeometry args={[viewport.width * 3, 0.8, 3]} />
                <meshStandardMaterial color={'#8c6223'} />
            </mesh>

            <mesh ref={planeRef} receiveShadow>
                <planeGeometry args={[10, 10]} />
                <shadowMaterial color="#171717" />
            </mesh>
        </>
    )
}