import { useThree } from '@react-three/fiber'
import { Environment, ScrollControls, Scroll } from '@react-three/drei'
import { Physics, Debug } from '@react-three/cannon'

import Radish from './Radish'
import Table from './Table'

export default function MainScene(props) {
  console.log('scene')
  const { viewport } = useThree()

  return (
    <>
      <Environment files={"preller_drive_1k.hdr"} background={true} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      <ScrollControls pages={3} damping={0.1} horizontal>
        <Scroll>

          <Physics>
            <Debug scale={1.1}>
              <Radish position={[0, 0.7, 0]} />
              <Radish position={[viewport.width, 0.7, 0]} />
              <Radish position={[viewport.width * 2, 0.7, 0]} />
              <Table position={[viewport.width, -1, 0]} />
            </Debug>
          </Physics>

        </Scroll>
      </ScrollControls>
    </>
  )
}