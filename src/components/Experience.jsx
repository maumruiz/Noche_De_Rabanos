import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'

import MainScene from './MainScene'
import Instructions from './Instructions'
import Dialog from './Dialog'
import Navbar from './Navbar'

export default function Experience() {
  return (
    <>
      <Canvas camera={{ position: [0, 1.5, 5] }}>
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
      </Canvas>
      <Dialog />
      <Instructions />
      <Navbar />
      <Loader />
    </>
  )
}
