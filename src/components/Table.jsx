import { useThree } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import { useBox, usePlane } from '@react-three/cannon'

export default function Table(props) {
    const { viewport } = useThree()
    const sides = useGLTF("/stand_sides.glb");
    const roof = useGLTF("/stand_roof.glb");
    const noche = useGLTF("/nochebuena.glb");

    const [ref] = useBox(() => ({ ...props, args: [viewport.width * 3, 3, 4] }))
    const [planeRef] = usePlane(() => ({ rotation:[-Math.PI / 2, 0, 0], position:[0, -10, 0] }))
    const [planeRoofRef] = usePlane(() => ({ rotation:[Math.PI / 2, 0, 0], position:[5, 2.60, 0] }))

    return (
        <>
            <group position={[-viewport.width / 2 + 0.3,0.2,0]} scale={3} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={sides.nodes.Sides.geometry}
                >
                    <meshStandardMaterial attach='material' color={'#BF9754'} />
                </mesh>
            </group>

            <group position={[viewport.width * 2.5 - 0.3,0.2,0]} scale={3} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={sides.nodes.Sides.geometry}
                    material={sides.materials.M_Palo_Madera}
                />
            </group>

            <group position={[viewport.width, 2.52, 0]} scale={[0.5 * viewport.width * 3, 1, 4]} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={roof.nodes.Plane002.geometry}
                    material={roof.materials.M_Techo}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={roof.nodes.Plane002_1.geometry}
                    material={roof.materials.M_Palo_Madera}
                />
            </group>

            <mesh ref={planeRoofRef}>
                <planeGeometry args={[15, 10]} />
                <shadowMaterial color="#171717" />
            </mesh>

            <mesh receiveShadow castShadow ref={ref}>
                <boxGeometry args={[viewport.width * 3, 3, 4]} />
                <meshStandardMaterial color={'#BF9754'} />
            </mesh>

            <mesh ref={planeRef}>
                <planeGeometry args={[10, 10]} />
                <shadowMaterial color="#171717" />
            </mesh>
        </>
    )
}