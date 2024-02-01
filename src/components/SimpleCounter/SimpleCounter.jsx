import { useReducer } from "react";


const initalState = 0;
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

export default function SimpleCounter() {

    // here state is new state. 
    const [state, dispatch] = useReducer(reducer, initalState);

    return (
        <div>
            <h2>
                SimpleCounter
            </h2>
            <div>
                <p>Counter {state}</p>
                <button onClick={() => dispatch("increment")}>Increment</button>
                <button onClick={() => dispatch("decrement")}>Decrement</button>
            </div>
        </div>
    )
}
