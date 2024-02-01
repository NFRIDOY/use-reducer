import { useReducer } from 'react'

/**
 * This is more efficient and easy than object implementation
 */

const initalState = 0;
const initalState2 = 100;
const reducer = (state, action) => {
    // switch state for control as action says
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}

export default function TwoCounterTwoUserReducer() {

    // here state is new state. 
    const [state, dispatch] = useReducer(reducer, initalState);
    const [state2, dispatch2] = useReducer(reducer, initalState2);

    return (
        <div style={{margin: "20px", padding: "20px", border: "2px solid red"}}><h2>
            TwoCounterTwoUserReducer
        </h2>
            <div>
                <p>Counter {state}</p>
                <button onClick={() => dispatch("increment")}>Increment</button>
                <button onClick={() => dispatch("decrement")}>Decrement</button>
            </div>
            <div>
                <p>Counter {state2}</p>
                <button onClick={() => dispatch2("increment")}>Increment</button>
                <button onClick={() => dispatch2("decrement")}>Decrement</button>
            </div>
        </div>
    )
}
