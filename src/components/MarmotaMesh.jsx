import { useGLTF } from "@react-three/drei";

export default function MarmotaMesh({ carvingState }) {
    const { nodes, materials } = useGLTF("/marmota.glb");
    return (
        <>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MarmotaBottom.geometry}
                material={materials.Palo}
                visible={carvingState > 0}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MarmotaMid.geometry}
                material={materials.Bola}
                visible={carvingState > 1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MarmotaGeo.geometry}
                material={materials.Bola}
                visible={carvingState > 2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.MarmotaGeo_1.geometry}
                material={materials["Rabano.001"]}
                visible={carvingState > 2}
            />
        </>
    );
}

useGLTF.preload("/marmota.glb");