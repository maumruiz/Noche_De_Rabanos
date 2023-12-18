import { Canvas } from '@react-three/fiber'

import MainScene from './components/MainScene'

export default function App() {
  return (
    <>
      {/* <ARButton sessionInit={{
        requiredFeatures: ["hit-test"]
      }} /> */}
      <Canvas camera={{ position: [0, 1.5, 5] }}>
        {/* <XR> */}
          <MainScene />
        {/* </XR> */}
      </Canvas>
    </>
  )
}