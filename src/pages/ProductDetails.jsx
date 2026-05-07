import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

function ProductDetails(props) {
  const { id } = useParams()

  const [product, setProduct] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products/${id}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to load product"
          )
        }

        return response.json()
      })

      .then((data) => {
        setProduct(data)

        setLoading(false)
      })

      .catch((error) => {
        setError(error.message)

        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <h2 className="message">
        Loading product...
      </h2>
    )
  }

  if (error) {
    return (
      <h2 className="message error">
        {error}
      </h2>
    )
  }

  return (
    <div className="details-page">
      <img
        src={product.image}
        alt={product.title}
      />

      <div className="details-content">
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <button
          className="details-btn"
          onClick={() =>
            props.addToCart({
              ...product,
              quantity: 1
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails