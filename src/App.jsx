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
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"
import Wishlist from "./pages/Wishlist"
import ProductDetails from "./pages/ProductDetails"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const [cartItems, setCartItems] =
    useState(() => {
      const savedCart =
        localStorage.getItem("cartItems")

      return savedCart
        ? JSON.parse(savedCart)
        : []
    })

  const [wishlistItems, setWishlistItems] =
    useState([])
    const [darkMode, setDarkMode] =
  useState(false)

  /* Add To Cart */

  function handleAddToCart(product) {
    if (!product || !product.id) {
      return
    }

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    )

    if (existingItem) {
      const updatedCart = cartItems.map(
        (item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity +
                  (product.quantity || 1)
              }
            : item
      )

      setCartItems(updatedCart)
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity:
            product.quantity || 1
        }
      ])
    }
  }

  /* Remove From Cart */

  function handleRemoveFromCart(
    indexToRemove
  ) {
    const updatedCart = cartItems.filter(
      (_, index) =>
        index !== indexToRemove
    )

    setCartItems(updatedCart)
  }

  /* Increase Quantity */

  function increaseQuantity(id) {
    const updatedCart = cartItems.map(
      (item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1
            }
          : item
    )

    setCartItems(updatedCart)
  }

  /* Decrease Quantity */

  function decreaseQuantity(id) {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity - 1
            }
          : item
      )
      .filter((item) => item.quantity > 0)

    setCartItems(updatedCart)
  }

  /* Wishlist */

  function addToWishlist(product) {
    const exists = wishlistItems.find(
      (item) => item.id === product.id
    )

    if (!exists) {
      setWishlistItems([
        ...wishlistItems,
        product
      ])
    }
  }

  function removeFromWishlist(id) {
    const updatedWishlist =
      wishlistItems.filter(
        (item) => item.id !== id
      )

    setWishlistItems(updatedWishlist)
  }
  function toggleDarkMode() {
  setDarkMode(!darkMode)
}

  /* Local Storage */

  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    )
  }, [cartItems])

  return (
    <BrowserRouter>
  <div
    className={
      darkMode ? "dark-mode" : ""
    }
  ></div>
      <Navbar
  cartCount={cartItems.length}
  toggleDarkMode={toggleDarkMode}
/>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={
                handleAddToCart
              }
              addToWishlist={
                addToWishlist
              }
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
    <ProtectedRoute>
      <Cart
        cartItems={cartItems}
        removeFromCart={
          handleRemoveFromCart
        }
        increaseQuantity={
          increaseQuantity
        }
        decreaseQuantity={
          decreaseQuantity
        }
      />
    </ProtectedRoute>
  }
/>
       <Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <Checkout
        cartItems={cartItems}
      />
    </ProtectedRoute>
  }
/>

        <Route
          path="/success"
          element={<Success />}
        />

     <Route
  path="/wishlist"
  element={
    <ProtectedRoute>
      <Wishlist
        wishlistItems={
          wishlistItems
        }
        removeFromWishlist={
          removeFromWishlist
        }
      />
    </ProtectedRoute>
  }
/>

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={
                handleAddToCart
              }
            />
          }
        />
        <Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/signup"
  element={<Signup />}
/>
      </Routes>
    </BrowserRouter>
  )
}

export default App