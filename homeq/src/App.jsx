import { useState } from 'react'
import { lazy,Suspense } from 'react'

import './App.css'

const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))
const HomeSlide = lazy(() => import('./components/HomeSlide'))

function App() {


  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      <Suspense>
        <HomeSlide /> 
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
