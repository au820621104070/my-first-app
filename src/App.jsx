import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  console.log("React App Running")

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default App