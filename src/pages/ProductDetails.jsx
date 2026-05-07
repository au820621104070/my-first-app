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

  const [quantity, setQuantity] =
    useState(1)

  const [selectedSize, setSelectedSize] =
    useState("M")

  const [selectedColor, setSelectedColor] =
    useState("Black")

  const [message, setMessage] =
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

  const totalPrice =
    product.price * quantity

  function handleAddToCart() {
    props.addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor
    })

    setMessage(
      "Product added to cart successfully!"
    )

    setTimeout(() => {
      setMessage("")
    }, 2000)
  }

  return (
    <div className="details-page">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.title}
          className="zoom-image"
        />
      </div>

      <div className="details-content">
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>
          ${totalPrice.toFixed(2)}
        </h2>

        {/* Size Selection */}

        <div className="variation">
          <label>Size:</label>

          <select
            value={selectedSize}
            onChange={(event) =>
              setSelectedSize(
                event.target.value
              )
            }
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        {/* Color Selection */}

        <div className="variation">
          <label>Color:</label>

          <select
            value={selectedColor}
            onChange={(event) =>
              setSelectedColor(
                event.target.value
              )
            }
          >
            <option>Black</option>
            <option>White</option>
            <option>Blue</option>
          </select>
        </div>

        {/* Quantity */}

        <div className="quantity-controls">
          <button
            onClick={() =>
              quantity > 1 &&
              setQuantity(quantity - 1)
            }
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
          >
            +
          </button>
        </div>

        <button
          className="details-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        {message && (
          <p className="success-message">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductDetails