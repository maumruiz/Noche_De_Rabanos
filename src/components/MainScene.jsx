import { useThree } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll, OrbitControls, Sparkles } from '@react-three/drei'
import { Physics, Debug } from '@react-three/cannon'

import Radish from './Radish'
import Table from './Table'
import { LeftHand } from './LeftHand'
import { RightHand } from './RightHand'
import ClickMarks from './ClickMarks'
import Effects from './Effects'

export default function MainScene(props) {
  console.log('scene')
  const { viewport } = useThree()

  return (
    <>
      <Environment files={"preller_drive_1k.hdr"} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI * 1.0} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      <ScrollControls pages={3} damping={0.1} horizontal>
        <Scroll>
          <Physics>
            {/* <Debug scale={1.1}> */}
            <Radish position={[0, -0.3, 0]} radishIndex={0} />
            <Radish position={[viewport.width, -0.3, 0]} radishIndex={1} />
            <Radish position={[viewport.width * 2, -0.3, 0]} radishIndex={2} />
            <LeftHand position={[0, -0.8, 2.2]} />
            <RightHand position={[0, -1, 2.2]} />
            <Table position={[viewport.width, -3, 0]} />
            {/* </Debug> */}
          </Physics>
        </Scroll>

        <Scroll html>
          <ClickMarks />
        </Scroll>
      </ScrollControls>

      <Effects />
      {/* <OrbitControls /> */}
    </>
  )
}