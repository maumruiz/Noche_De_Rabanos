import { useEffect } from 'react'
import { Instance } from '@react-three/drei'
import { useBox } from '@react-three/cannon'

export default function Breadcrumb(props) {
    console.log('breadcrumb')
    
    const [ref, api] = useBox(() => ({
      mass: 1,
      args: [0.2, 0.2, 0.2],
      position: props.position,
      rotation: props.rotation
    }))
  
    useEffect(() => {
      api.applyImpulse([(Math.random()-0.5)*2,Math.random()*4+1,(Math.random()-0.5)*2], [0,0,0])
    //   api.sleep()
    }, [])
  
    // useFrame((state, delta) => {
    //   console.log(ref.current)
    // })
  
    return (
      <Instance ref={ref} color={props.color} scale={props.scale} />
    )
  }