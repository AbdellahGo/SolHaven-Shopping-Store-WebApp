import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { About, Blog, Cart, Checkout, CompareProducts, Contact, FAQs, Home, ShopLocation, Shop, SignIn, Wishlist, ShopDetails, BlogDetails, Search } from "./pages"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='compare' element={<CompareProducts />} />
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<FAQs />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop-location' element={<ShopLocation />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='wishlist' element={<Wishlist />} />
        <Route path='shop-details/:id' element={<ShopDetails />} />
        <Route path='blog-details/:id' element={<BlogDetails />} />
        <Route path='search' element={<Search />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
