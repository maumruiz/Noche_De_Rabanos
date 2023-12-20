import { useGLTF } from "@react-three/drei";

export default function FlorDePinaMesh({ carvingState }) {
    const { nodes, materials } = useGLTF("/florDePina.glb");
    return (
        <>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FlorDePinaBottom.geometry}
                material={materials.Rabano}
                visible={carvingState > 0}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FlorDePinaMid.geometry}
                material={materials.Rabano}
                visible={carvingState > 1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FlorDePinaGeo.geometry}
                material={materials.Rabano}
                visible={carvingState > 2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FlorDePinaGeo_1.geometry}
                material={materials.RabanoPel}
                visible={carvingState > 2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.FlorDePinaGeo_2.geometry}
                material={materials.Hojas}
                visible={carvingState > 2}
            />
        </>
    );
}

useGLTF.preload("/florDePina.glb");