import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll, Instances, Instance, Box } from '@react-three/drei'
import { Physics, useBox, Debug, usePlane } from '@react-three/cannon'
import { ARButton, XR } from '@react-three/xr'

function Radish(props) {
  const ref = useRef()
  const [carvingState, setCarvingState] = useState(0)
  const [isCarving, setIsCarving] = useState(false)
  let animationTime = 0;

  useFrame((state, delta) => {
    if (isCarving) {
      animationTime += delta
      console.log(animationTime)
      if (animationTime > 1) {
        setIsCarving(false)
        animationTime = 0
      }
    }

    ref.current.rotation.y += (delta * 0.4)
  })

  const carve = (event) => {
    if (isCarving || carvingState > 2)
      return
    setIsCarving(true)
    setCarvingState(carvingState + 1)
  }

  return (
    <>
      <mesh
        {...props}
        ref={ref}
        onClick={(event) => carve(event)}
      >
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color={carvingState == 0 ? 'brown' : carvingState == 1 ? 'hotpink' : 'orange'} />
      </mesh>
      <Breadcrumbs position={props.position}/>
    </>
  )
}

function Breadcrumb(props) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    args: [0.2, 0.2, 0.2],
    position: props.position,
    rotation: props.rotation
  }))

  useEffect(() => {
    api.applyImpulse([(Math.random()-0.5)*2,Math.random()*4+1,(Math.random()-0.5)*2], [0,0,0])
  }, [])

  return (
    <Instance ref={ref} color={props.color} scale={props.scale} />
  )
}

function Breadcrumbs(props) {
  const randomVector = (r) => [props.position[0] + r / 2 - Math.random() * r, r / 2 - Math.random() * r + 0.5, r / 2 - Math.random() * r]
  const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
  const breadcrumbs = Array.from({ length: 100 }, (r = 2) => ({
    random: Math.random(),
    position: randomVector(r),
    rotation: randomEuler()
  }))
  
  // useEffect(() => {
  //   if(props.isCarving) {

  //   }
  // }, [])

  return (
    <Instances
      limit={100}
      range={100}
    >
      <boxGeometry />
      <meshStandardMaterial />
      {breadcrumbs.map((item, i) => (
        <Breadcrumb key={i} position={item.position} rotation={item.rotation} color="red" scale={0.2} />
      ))}
    </Instances>
  )
}

function Table(props) {
  const { viewport } = useThree()

  const [ref] = useBox(() => ({ ...props, args: [viewport.width * 3, 0.8, 3] }))

  return (
    <mesh receiveShadow castShadow ref={ref}>
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

          <Physics broadphase="SAP">
            <Debug scale={1.1}>
              <Radish position={[0, 0.5, 0]} />
              <Radish position={[viewport.width, 0.5, 0]} />
              <Radish position={[viewport.width * 2, .5, 0]} />
              <Table position={[viewport.width, -1, 0]} />
            </Debug>
          </Physics>

        </Scroll>
      </ScrollControls>
    </>
  )
}

export default function App() {
  return (
    <>
      <ARButton sessionInit={{
        requiredFeatures: ["hit-test"]
      }} />
      <Canvas camera={{ position: [0, 1.5, 5] }}>
        <XR>
          <Scene />
        </XR>
      </Canvas>
    </>
  )
}