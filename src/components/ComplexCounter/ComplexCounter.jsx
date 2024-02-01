import { useReducer } from "react";

const initalState = {
    counter: 0, // counter1
    counter2: 0, // counter2
};
const reducer = (state, action) => {
    // switch state for control as action says
    switch (action?.type) {
        case "increment":
            return { ...state, counter: state?.counter + action?.value };
        case "decrement":
            return { ...state, counter: state?.counter - action?.value };
        case "increment2":
            return { ...state, counter2: state?.counter2 + action?.value };
        case "decrement2":
            return { ...state, counter2: state?.counter2 - action?.value };
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
                <div>
                    <h2>
                        Counter2 {state?.counter2}
                    </h2>
                    <div>
                        <button onClick={() => dispatch({
                            type: "increment2",
                            value: 10
                        })}>
                            Increment for counter 2
                        </button>
                        <button onClick={() => dispatch({
                            type: "decrement2",
                            value: 1
                        })}>
                            Decrement for counter 2
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
