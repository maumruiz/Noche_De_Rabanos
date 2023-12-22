import { Canvas } from '@react-three/fiber'

import MainScene from './components/MainScene'
import Instructions from './components/Instructions'

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 1.5, 5] }}>
          <MainScene />
      </Canvas>
      <Instructions />
    </>
  )
}