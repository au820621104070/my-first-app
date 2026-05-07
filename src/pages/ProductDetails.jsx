import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

function ProductDetails() {
  const { id } = useParams()

  const [product, setProduct] =
    useState(null)

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products/${id}`
    )
      .then((response) => response.json())
      .then((data) => setProduct(data))
  }, [id])

  if (!product) {
    return <h2>Loading...</h2>
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
      </div>
    </div>
  )
}

export default ProductDetails