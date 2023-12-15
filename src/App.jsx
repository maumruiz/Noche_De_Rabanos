import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll, Instances, Instance, Box } from '@react-three/drei'
import { Physics, useBox, Debug, usePlane } from '@react-three/cannon'
import { ARButton, XR } from '@react-three/xr'
import { v4 as uuidv4 } from 'uuid';

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