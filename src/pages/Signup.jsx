import { useState } from "react"

import { useNavigate } from "react-router-dom"

import {
  createUserWithEmailAndPassword
} from "firebase/auth"

import { auth } from "../firebase"

function Signup() {
  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [error, setError] =
    useState("")

  const navigate = useNavigate()

  function handleSignup(event) {
    event.preventDefault()

    createUserWithEmailAndPassword(
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
      <h1>Signup</h1>

      <form
        className="checkout-form"
        onSubmit={handleSignup}
      >
        <input
          type="text"
          placeholder="Full Name"
          required
          onChange={(event) =>
            setName(event.target.value)
          }
        />

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
          Create Account
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

export default Signup