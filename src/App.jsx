import { Canvas } from '@react-three/fiber'

import MainScene from './components/MainScene'
import Instructions from './components/Instructions'
import Dialog from './components/Dialog'

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 1.5, 5] }}>
        <MainScene />
      </Canvas>
      <Dialog />
      <Instructions />
    </>
  )
}