import { useNavigate } from "react-router-dom"

function Checkout(props) {
  const navigate = useNavigate()

  const totalPrice = props.cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  function handleSubmit(event) {
    event.preventDefault()

    navigate("/success")
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <form
        className="checkout-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="text"
          placeholder="Shipping Address"
          required
        />

        <h2>
          Total: $
          {totalPrice.toFixed(2)}
        </h2>

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  )
}

export default Checkout