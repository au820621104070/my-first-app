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

  const [selectedCategory, setSelectedCategory] =
    useState("all")

  const [sortOption, setSortOption] =
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
    (product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory

      return (
        matchesSearch &&
        matchesCategory
      )
    }
  )

  const sortedProducts = [
    ...filteredProducts
  ].sort((a, b) => {
    if (sortOption === "low-high") {
      return a.price - b.price
    }

    if (sortOption === "high-low") {
      return b.price - a.price
    }

    if (sortOption === "a-z") {
      return a.title.localeCompare(b.title)
    }

    return 0
  })

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

      <div className="category-filter">
        <select
          onChange={(event) =>
            setSelectedCategory(
              event.target.value
            )
          }
        >
          <option value="all">
            All Categories
          </option>

          <option value="electronics">
            Electronics
          </option>

          <option value="jewelery">
            Jewelry
          </option>

          <option value="men's clothing">
            Men's Clothing
          </option>

          <option value="women's clothing">
            Women's Clothing
          </option>
        </select>
      </div>

      <div className="sort-filter">
        <select
          onChange={(event) =>
            setSortOption(
              event.target.value
            )
          }
        >
          <option value="">
            Sort Products
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>

          <option value="a-z">
            Name: A to Z
          </option>
        </select>
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
        {sortedProducts.map((product) => (
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