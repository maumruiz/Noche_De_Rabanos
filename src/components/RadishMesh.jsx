import { useGLTF } from "@react-three/drei";

export default function RadishMesh({carvingState}) {
    const { nodes, materials } = useGLTF("/rabano.glb");
    return (
        <>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.RabanoBottom.geometry}
                material={materials.Purple}
                visible={carvingState < 1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.RabanoMidGeo.geometry}
                material={materials.Purple}
                visible={carvingState < 2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.RabanoMidGeo_1.geometry}
                material={materials.Whiteish}
                visible={carvingState < 2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.RabanoTopGeo.geometry}
                material={materials.Green}
                visible={carvingState < 3}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.RabanoTopGeo_1.geometry}
                material={materials.Purple}
                visible={carvingState < 3}
            />
        </>
    );
}

useGLTF.preload("/rabano_sep.glb");