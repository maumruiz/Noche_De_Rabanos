import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { ARButton, XR } from '@react-three/xr'

function Radish(props) {
  const ref = useRef()
  const [carvingState, setCarvingState] = useState(0)
  const [isCarving, setIsCarving] = useState(false)
  let animationTime = 0;

  useFrame((state, delta) => {
    if(isCarving) {
      animationTime += delta
      console.log(animationTime)
      if(animationTime > 1) {
        setIsCarving(false)
        animationTime = 0
      }
    }
    
    ref.current.rotation.y += (delta * 0.4)
  })

  const carve = (event) => {
    if(isCarving)
      return
    setIsCarving(true)
    setCarvingState(carvingState + 1)
  }


  return (
    <mesh
      {...props}
      ref={ref}
      onClick={(event) => carve(event)}
    >
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color={carvingState == 0 ? 'brown' : carvingState == 1 ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Table(props) {
  const { viewport } = useThree()

  return (
    <mesh {...props}>
      <boxGeometry args={[viewport.width * 3, 0.8, 3]} />
      <meshStandardMaterial color={'#8c6223'} />
    </mesh>
  )
}

function Scene(props) {

  const { viewport } = useThree()

  return (
    <>
      <Environment files={"preller_drive_1k.hdr"} background={true} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      <ScrollControls pages={3} damping={0.1} horizontal>
        <Scroll>
          <Radish position={[0, 0.5, 0]} />
          <Radish position={[viewport.width, 0.5, 0]} />
          <Radish position={[viewport.width * 2, .5, 0]} />
          <Table position={[viewport.width, -1, 0]} />
        </Scroll>
      </ScrollControls>

      {/* <OrbitControls /> */}
    </>
  )
}

export default function App() {
  return (
    <>
      <ARButton sessionInit={{
        requiredFeatures: ["hit-test"]
      }} />
      <Canvas camera={{ position: [0, 1, 5] }}>
        <XR>
          <Scene />
        </XR>
      </Canvas>
    </>
  )
}