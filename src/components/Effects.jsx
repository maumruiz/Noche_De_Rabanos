import { Sparkles } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette, ChromaticAberration } from '@react-three/postprocessing'

export default function Effects() {
    return (
        <>
            <EffectComposer enabled={true}>
                <Bloom luminanceThreshold={2} luminanceSmoothing={1} height={300} />
                <Vignette offset={0.3} darkness={0.5} />
            </EffectComposer>
            <Sparkles count={100} scale={4}/>
        </>
    )
}
