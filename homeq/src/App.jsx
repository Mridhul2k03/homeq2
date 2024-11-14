import { useState } from 'react'
import { lazy,Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))
const Landing = lazy(() => import('./pages/Landing'))	

function App() {


  return (
    <>


      <Suspense>

        <Navbar />
        
      </Suspense>

      <Routes>

        <Route path="/" element={<Landing />} />

      </Routes>
      
      <Suspense>
        
        <Footer />

      </Suspense>


    </>
  )
}

export default App
