import { Link } from "react-router-dom"

function ProductCard(props) {
  return (
    <div className="product-card">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          srcSet={`
            ${props.image} 480w,
            ${props.image} 768w,
            ${props.image} 1200w
          `}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            25vw
          "
          alt={props.name}
          loading="lazy"
        />

        <h3>{props.name}</h3>
      </Link>

      <p>${props.price}</p>

      <button onClick={props.addToCart}>
        🛒 Add to Cart
      </button>

      <button
        onClick={props.addToWishlist}
      >
        ❤️ Wishlist
      </button>
    </div>
  )
}

export default ProductCard