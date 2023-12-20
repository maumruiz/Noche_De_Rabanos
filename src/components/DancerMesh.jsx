import { useGLTF } from "@react-three/drei";

export default function DancerMesh({ carvingState }) {
    const { nodes, materials } = useGLTF("/danzante.glb");
    return (
        <>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.DanzanteBottom.geometry}
                material={materials.RabanoMat}
                visible={carvingState > 0}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MidGeo.geometry}
                material={materials.RabanoPeladoMat}
                visible={carvingState > 1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MidGeo_1.geometry}
                material={materials.RabanoMat}
                visible={carvingState > 1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TopGeo.geometry}
                material={materials.RabanoPeladoMat}
                visible={carvingState > 2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TopGeo_1.geometry}
                material={materials.RabanoMat}
                visible={carvingState > 2}
            />
        </>
    );
}

useGLTF.preload("/danzante.glb");