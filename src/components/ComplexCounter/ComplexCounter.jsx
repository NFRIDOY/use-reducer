import { useReducer } from "react";

const initalState = {
    counter: 0,
};
const reducer = (state, action) => {
    // switch state for control as action says
    switch (action?.type) {
        case "increment":
            return { counter: state?.counter + action?.value };
        case "decrement":
            return { counter: state?.counter - action?.value };
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
                    type: "increment",
                    value: 1
                })}>
                    Increment
                </button>
                <button onClick={() => dispatch({
                    type: "decrement",
                    value: 1
                })}>
                    Decrement
                </button>
                <div>
                    <button onClick={() => dispatch({
                        type: "increment",
                        value: 10
                    })}>
                        Increment 10
                    </button>
                    <button onClick={() => dispatch({
                        type: "decrement",
                        value: 10
                    })}>
                        Decrement 10
                    </button>
                </div>
            </div>
        </div>
    )
}
