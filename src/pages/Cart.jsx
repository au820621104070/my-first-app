import { Link } from "react-router-dom"

function Cart(props) {
  const totalPrice = props.cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {props.cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          {props.cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <h3>{item.title}</h3>

              <p>${item.price}</p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    props.decreaseQuantity(
                      item.id
                    )
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    props.increaseQuantity(
                      item.id
                    )
                  }
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  props.removeFromCart(
                    props.cartItems.indexOf(item)
                  )
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="total-price">
            Total: ${totalPrice.toFixed(2)}
          </h2>

          <Link to="/checkout">
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Cart