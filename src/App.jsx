import { Canvas } from '@react-three/fiber'

import MainScene from './components/MainScene'
import Instructions from './components/Instructions'
import Dialog from './components/Dialog'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Experience from './components/Experience'
import AboutUs from './components/AboutUs'
import OurArtwork from './components/OurArtwork'
import Process from './components/Process'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Experience/>,
  },
  {
    path: "aboutUs",
    element: <AboutUs />
  },
  {
    path: "ourArtwork",
    element: <OurArtwork />
  },
  {
    path: "ourProcess",
    element: <Process />
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />

      {/* <Canvas camera={{ position: [0, 1.5, 5] }}>
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
      </Canvas>
      <Dialog /> */}
      {/* <Instructions />
      <Loader /> */}

    </>
  )
}