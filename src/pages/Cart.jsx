import { Link } from "react-router-dom"

function Cart(props) {
  const totalPrice = props.cartItems.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  )

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {props.cartItems.length === 0 ? (
        <>
          <p>No items added yet.</p>

          <Link to="/">
            <button className="checkout-btn">
              Continue Shopping
            </button>
          </Link>
        </>
      ) : (
        <>
          {props.cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="cart-details">
                <h3>{item.title}</h3>

                <p>
                  ${item.price}
                </p>

                {item.selectedSize && (
                  <p>
                    Size:
                    {
                      item.selectedSize
                    }
                  </p>
                )}

                {item.selectedColor && (
                  <p>
                    Color:
                    {
                      item.selectedColor
                    }
                  </p>
                )}

                {/* Quantity */}

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

                {/* Remove */}

                <button
                  className="remove-btn"
                  onClick={() =>
                    props.removeFromCart(
                      props.cartItems.indexOf(
                        item
                      )
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}

          <h2 className="total-price">
            Total: $
            {totalPrice.toFixed(2)}
          </h2>

          {/* Buttons */}

          <div className="cart-buttons">
            <Link to="/">
              <button className="checkout-btn">
                Continue Shopping
              </button>
            </Link>

            <Link to="/checkout">
              <button
                className="checkout-btn"
                disabled={
                  props.cartItems.length === 0
                }
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart