import { useContext } from "react"
import { ConterContext } from "../../App"


export default function Child() {
    const { state, dispatch } = useContext(ConterContext)
    return (
        <div style={{ margin: "20px", padding: "20px", border: "2px solid blue" }}>
            <h2>
                Adder
            </h2>
            <div>
                <p>Adder {state}</p>
                <button onClick={() => dispatch("add")}>Add</button>
                <button onClick={() => dispatch("reverseAdd")}>Reverse Add</button>
            </div>
        </div>
    )
}
