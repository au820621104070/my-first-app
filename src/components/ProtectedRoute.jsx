import { Navigate } from "react-router-dom"

function ProtectedRoute(props) {
  const user = localStorage.getItem(
    "user"
  )

  if (!user) {
    return <Navigate to="/login" />
  }

  return props.children
}

export default ProtectedRoute