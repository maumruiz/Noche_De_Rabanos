import { useGLTF } from "@react-three/drei";

export default function DancerMesh({ carvingState }) {
    const { nodes, materials } = useGLTF("/danzante.glb");
    return (
        <>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TopGeo001.geometry}
                material={materials["RabanoPeladoMat.001"]}
                visible={carvingState > 2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TopGeo001_1.geometry}
                material={materials["RabanoMat.001"]}
                visible={carvingState > 2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MidGeo001.geometry}
                material={materials["RabanoPeladoMat.001"]}
                visible={carvingState > 1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MidGeo001_1.geometry}
                material={materials["RabanoMat.001"]}
                visible={carvingState > 1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BottomGeo001.geometry}
                material={materials["RabanoMat.001"]}
                visible={carvingState > 0}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BottomGeo001_1.geometry}
                material={materials.BlancoCortes}
                visible={carvingState > 0}
            />
        </>
    );
}

useGLTF.preload("/danzante.glb");