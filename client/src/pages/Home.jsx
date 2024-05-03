import { Banner, BlogBar, Categories, HeroSection, ProductCountdown, ProductFeature, ProductsBar } from '../components'


const Home = () => {
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