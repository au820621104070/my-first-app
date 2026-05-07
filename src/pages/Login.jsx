import { useState } from "react"

import { useNavigate } from "react-router-dom"

import {
  signInWithEmailAndPassword
} from "firebase/auth"

import { auth } from "../firebase"

function Login() {
  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [error, setError] =
    useState("")

  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()

    signInWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(() => {
        navigate("/")
      })

      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <div className="checkout-page">
      <h1>Login</h1>

      <form
        className="checkout-form"
        onSubmit={handleLogin}
      >
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(event) =>
            setPassword(
              event.target.value
            )
          }
        />

        <button type="submit">
          Login
        </button>

        {error && (
          <p className="error">
            {error}
          </p>
        )}
      </form>
    </div>
  )
}

export default Login