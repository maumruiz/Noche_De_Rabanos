import { Canvas } from '@react-three/fiber'

import MainScene from './components/MainScene'
import Instructions from './components/Instructions'
import Dialog from './components/Dialog'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 1.5, 5] }}>
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
      </Canvas>
      <Dialog />
      <Navbar />
      <Instructions />
      <Loader />
    </>
  )
}