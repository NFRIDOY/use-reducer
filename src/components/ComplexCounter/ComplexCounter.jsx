import { useReducer } from "react";

const initalState = {
    counter: 0,
};
const reducer = (state, action) => {
    // switch state for control as action says
    switch (action?.type) {
        case "increment":
            return { counter: state?.counter + 1};
        case "decrement":
            return { counter: state?.counter - 1};
        default:
            return state;
    }
}

export default function ComplexCounter() {
    // here state is new state. 
    const [state, dispatch] = useReducer(reducer, initalState);

    return (
        <div>
            <h2>
                ComplexCounter
            </h2>
            <div>
                <p>Counter {state?.counter}</p>
                <button onClick={() => dispatch({
                    type: "increment"
                })}>
                    Increment
                </button>
                <button onClick={() => dispatch({
                    type: "decrement"
                })}>
                    Decrement
                </button>
            </div>
        </div>
    )
}
