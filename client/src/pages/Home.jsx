import { useEffect } from 'react'
import { Banner, BlogBar, Categories, HeroSection, ProductCountdown, ProductFeature, ProductsBar } from '../components'


const Home = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div className='home'>
      <HeroSection />
      <Categories />
      <ProductsBar />
      <ProductFeature />
      <Banner />
      <ProductsBar categoriesControl />
      <ProductCountdown />
      <BlogBar />
    </div>
  )
}

export default Home