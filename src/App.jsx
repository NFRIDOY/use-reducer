import { createContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCounter from './components/SimpleCounter/SimpleCounter'
import ComplexCounter from './components/ComplexCounter/ComplexCounter'
import TwoCounterTwoUserReducer from './components/TwoCounterTwoUserReducer/TwoCounterTwoUserReducer'
import Parent from './components/Parent/Parent'
import GetData from './components/GetData/GetData'
import BorderRaper from './components/Styles/BorderRaper'

const adderInitalValue = 23;
const adderReducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "reverseAdd":
      return state - 1;
    default:
      return state;
  }
}

export const ConterContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(adderReducer, adderInitalValue)


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
      <h1>React Reducer</h1>
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
      <TwoCounterTwoUserReducer />


      <BorderRaper >
        <ConterContext.Provider value={{ state, dispatch }}>
          <Parent></Parent>
        </ConterContext.Provider>
      </BorderRaper>

      <BorderRaper colorB='green'>
        <GetData />
      </BorderRaper>


    </>
  )
}

export default App
