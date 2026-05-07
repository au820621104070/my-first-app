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
import ProductDetails from "./pages/ProductDetails"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart =
      localStorage.getItem("cartItems")

    return savedCart
      ? JSON.parse(savedCart)
      : []
  })

 function handleAddToCart(product) {
  const existingItem = cartItems.find(
    (item) => item.id === product.id
  )

  if (existingItem) {
    const updatedCart = cartItems.map(
      (item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
    )

    setCartItems(updatedCart)
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1
      }
    ])
  }
}

  function handleRemoveFromCart(indexToRemove) {
    const updatedCart = cartItems.filter(
      (_, index) => index !== indexToRemove
    )

    setCartItems(updatedCart)
  }
function increaseQuantity(id) {
  const updatedCart = cartItems.map(
    (item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
  )

  setCartItems(updatedCart)
}

function decreaseQuantity(id) {
  const updatedCart = cartItems
    .map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity - 1
          }
        : item
    )
    .filter((item) => item.quantity > 0)

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
  increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
/>
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetails
  addToCart={handleAddToCart}
/>}
        />

        <Route
  path="/checkout"
  element={
    <Checkout cartItems={cartItems} />
  }
/>
<Route
  path="/success"
  element={<Success />}
/>
      </Routes>
    </BrowserRouter>
  )
}

export default App