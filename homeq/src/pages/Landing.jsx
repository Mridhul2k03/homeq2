import { lazy,Suspense } from 'react'

const HomeSlide = lazy(() => import('../components/HomeSlide'))
const Home = lazy(() => import('../components/Home'))
const ProductSlider = lazy(() => import('../components/ProductSlider'))
const Landing = () => {
  return (
    <div>
        

      <Suspense>

        <HomeSlide /> 

      </Suspense>


      <Suspense>

        <Home /> 

      </Suspense>


      <Suspense>

        <ProductSlider />

      </Suspense>


    </div>
  )
}

export default Landing
