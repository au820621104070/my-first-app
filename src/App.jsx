import { useState, useEffect } from "react"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"

function App() {
 const [cartItems, setCartItems] = useState(() => {
  const savedCart =
    localStorage.getItem("cartItems")

  return savedCart
    ? JSON.parse(savedCart)
    : []
})

function handleAddToCart(product) {
  setCartItems([...cartItems, product])
}

function handleRemoveFromCart(indexToRemove) {
  const updatedCart = cartItems.filter(
    (_, index) => index !== indexToRemove
  )

  setCartItems(updatedCart)
}
useEffect(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems)
  )
}, [cartItems])

  return (
    <BrowserRouter>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/cart"
          element={
           <Cart
  cartItems={cartItems}
  removeFromCart={handleRemoveFromCart}
/>
          }

       />
      </Routes>
    </BrowserRouter>
  )
}
export default App