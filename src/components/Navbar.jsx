import { Link } from "react-router-dom"

import { signOut } from "firebase/auth"

import { auth } from "../firebase"

function Navbar(props) {
  function handleLogout() {
    signOut(auth)
  }

  return (
    <nav className="navbar">
      <h2 className="logo">
        ShopEasy
      </h2>

      <div className="nav-links">
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

        <Link to="/wishlist">
          Wishlist
        </Link>

        <Link to="/cart">
          Cart ({props.cartCount})
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/signup">
          Signup
        </Link>

        <button
          onClick={props.toggleDarkMode}
        >
          🌙
        </button>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar