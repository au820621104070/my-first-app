function Wishlist(props) {
  return (
    <div className="cart-page">
      <h1>Wishlist</h1>

      {props.wishlistItems.length === 0 ? (
        <p>No wishlist items yet.</p>
      ) : (
        props.wishlistItems.map((item) => (
          <div
            key={item.id}
            className="cart-item"
          >
            <h3>{item.title}</h3>

            <p>${item.price}</p>

            <button
              onClick={() =>
                props.removeFromWishlist(
                  item.id
                )
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Wishlist