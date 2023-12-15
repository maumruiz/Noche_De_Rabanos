import { useThree } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'

export default function Table(props) {
    const { viewport } = useThree()

    const [ref] = useBox(() => ({ ...props, args: [viewport.width * 3, 0.8, 3] }))

    return (
        <mesh receiveShadow castShadow ref={ref}>
            <boxGeometry args={[viewport.width * 3, 0.8, 3]} />
            <meshStandardMaterial color={'#8c6223'} />
        </mesh>
    )
}