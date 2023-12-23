import { Canvas } from '@react-three/fiber'
import { Splat, Float, CameraControls, StatsGl, Effects } from '@react-three/drei'
import Navbar from './Navbar'

export default function OurArtwork() {
  return (
    <>
      <Canvas dpr={1.5} gl={{ antialias: false }} camera={{ position: [0, 0, 2] }}>
        <CameraControls makeDefault />
        {/* <StatsGl /> */}
        <Splat alphaTest={0.1} src={`/cleaned.splat`} scale={0.5} position={[0, 0, 0]} />
      </Canvas>
      <Navbar />
    </>
  )
}
