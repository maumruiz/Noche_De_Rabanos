import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Splat, Float, CameraControls, StatsGl, Effects } from '@react-three/drei'

import Navbar from './Navbar'
import styles from './OurArtwork.module.css'
import handPointer from '/hand_pointer.svg'

export default function OurArtwork() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStarted(true)
    }, 5000)
  }, [])
  

  return (
    <>
      <Canvas dpr={1.5} gl={{ antialias: false }} camera={{ position: [0, 0, 2] }}>
        <CameraControls makeDefault />
        {/* <StatsGl /> */}
        <Splat alphaTest={0.1} src={`/cleaned.splat`} scale={0.5} position={[0, 0, 0]} />
      </Canvas>

      {/* <div style={{visibility: started ? 'hidden' : 'visible' }} */}
      <div style={{visibility: started ? 'hidden' : 'visible' }} className={`${styles.instructionsContainer} ${styles.showContainer}`}>
        <h3 className={styles.instructionText}>Desliza para explorar la pieza</h3>
        <div>
          <div className={styles.mouse} />
          <img src={handPointer} alt="handPointer" className={styles.handPointer} />
        </div>
      </div>

      <Navbar />
    </>
  )
}
