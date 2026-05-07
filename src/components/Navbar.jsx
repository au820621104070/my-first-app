import { Link } from "react-router-dom"

function Navbar(props) {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>ShopEasy</h1>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>
      </nav>

      <div className="nav-right">
        <button onClick={props.toggleDarkMode}>
  🌙
</button>
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
        />

        <Link to="/cart" className="cart">
          🛒

          <span className="cart-badge">
            {props.cartCount}
          </span>
        </Link>

        <div className="menu-icon">
          ☰
        </div>
      </div>
    </header>
  )
}

export default Navbar