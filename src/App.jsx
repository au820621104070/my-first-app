import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductCard from "./components/ProductCard"

function App() {
  const [cartCount, setCartCount] = useState(0)

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99",
      image: "https://via.placeholder.com/200"
    },

    {
      id: 2,
      name: "Smart Watch",
      price: "$149",
      image: "https://via.placeholder.com/200"
    },

    {
      id: 3,
      name: "Gaming Mouse",
      price: "$59",
      image: "https://via.placeholder.com/200"
    }
  ]

  function handleAddToCart() {
    setCartCount(cartCount + 1)
  }

  return (
    <div>
      <Navbar cartCount={cartCount} />

      <Hero />

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            addToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default App