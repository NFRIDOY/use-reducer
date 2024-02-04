import { useEffect, useState } from "react"

/**
 * using useState 
 * 
 */


export default function GetData() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setError("")
                setData(data)
            })
            .catch(() => {
                setLoading(false)
                setError("There was an error fetching")
                setData(data)
            })

    }, [])

    return (
        <div >
            {
                loading ? `loading........` : data?.name
            }
        </div>
    )
}
