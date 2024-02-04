import { useContext } from "react"
import { ConterContext } from "../../App"


export default function Child() {
    const { count } = useContext(ConterContext)
    return (
        <div style={{ margin: "20px", padding: "20px", border: "2px solid blue" }}>
            <h2>
                SimpleCounter {count}
                {console.log(count)}
            </h2>
            {/* <div>
                <p>Counter {state}</p>
                <button onClick={() => dispatch("increment")}>Increment</button>
                <button onClick={() => dispatch("decrement")}>Decrement</button>
            </div> */}
        </div>
    )
}
