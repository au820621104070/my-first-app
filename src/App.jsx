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
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
      id: 2,
      name: "Smart Watch",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
      id: 3,
      name: "Gaming Mouse",
      price: "$59",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db"
    }
  ]

  function handleAddToCart() {
    setCartCount(cartCount + 1)
  }

  return (
    <div>
      <Navbar cartCount={cartCount} />

      <Hero />
  
      <h2 className="section-title">
        Featured Products
      </h2>

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