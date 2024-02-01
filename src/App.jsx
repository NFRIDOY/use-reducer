import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCounter from './components/SimpleCounter/SimpleCounter'
import ComplexCounter from './components/ComplexCounter/ComplexCounter'



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          count is {count}
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
       
      </div>

      <SimpleCounter />
      <ComplexCounter />
    </>
  )
}

export default App
