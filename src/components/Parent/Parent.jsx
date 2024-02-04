import Child from "../Child/Child";


export default function Parent() {
    return (
        <div style={{ margin: "20px", padding: "20px", border: "2px solid blue" }}>
            Parent
            <Child></Child>
        </div>
    )
}
