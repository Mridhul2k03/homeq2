import { useState } from 'react'
import { lazy,Suspense } from 'react'

import './App.css'

const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))
const HomeSlide = lazy(() => import('./components/HomeSlide'))
const Home = lazy(() => import('./components/Home'))

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
        <Home /> 
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
