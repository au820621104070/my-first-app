import { useEffect, useState } from "react"

import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"

function Home(props) {
  const [products, setProducts] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  const [searchTerm, setSearchTerm] =
    useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to fetch products"
          )
        }

        return response.json()
      })

      .then((data) => {
        setProducts(data)

        setLoading(false)
      })

      .catch((error) => {
        setError(error.message)

        setLoading(false)
      })
  }, [])

  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Hero />

      <h2 className="section-title">
        Featured Products
      </h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className="product-search"
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />
      </div>

      {loading && (
        <h2 className="message">
          Loading products...
        </h2>
      )}

      {error && (
        <h2 className="message error">
          {error}
        </h2>
      )}

      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            image={product.image}
            addToCart={() =>
              props.addToCart(product)
            }
          />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Home