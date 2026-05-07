function Navbar(props) {
  return (
    <nav>
      <h1>ShopEasy</h1>

      <p>Cart: {props.cartCount}</p>
    </nav>
  )
}

export default Navbar