

export default function BorderRaper({ children, colorB = "yellow" }) {
    return (
        <div style={{ margin: "20px", padding: "20px", border: `2px solid ${colorB}` }}>
            {children}
        </div>
    )
}
