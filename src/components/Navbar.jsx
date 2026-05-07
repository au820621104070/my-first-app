function Navbar(props) {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>ShopEasy</h1>
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className="nav-right">
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
        />

        <div className="cart">
          🛒
          <span className="cart-badge">
            {props.cartCount}
          </span>
        </div>

        <div className="menu-icon">
          ☰
        </div>
      </div>
    </header>
  )
}

export default Navbar