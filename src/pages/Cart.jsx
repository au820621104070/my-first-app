function Cart(props) {
  const totalPrice = props.cartItems.reduce(
    (total, item) => total + item.price,
    0
  )

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {props.cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          {props.cartItems.map((item, index) => (
            <div
              key={index}
              className="cart-item"
            >
              <h3>{item.name}</h3>

              <p>${item.price}</p>

              <button
                onClick={() =>
                  props.removeFromCart(index)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="total-price">
            Total: ${totalPrice}
          </h2>
        </>
      )}
    </div>
  )
}

export default Cart