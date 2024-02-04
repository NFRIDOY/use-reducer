import { useEffect, useReducer, useState } from "react"

const initalState = {
    loading: true,
    error: "",
    data: {},
}
const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                loading: false,
                error: "",
                data: action.data
            }
        case "FAILURE":
            return {
                loading: false,
                error: "There was an error",
                data: {}
            }
        default:
            return state;
    }
}
export default function GetData2() {
    const [state, dispatch] = useReducer(reducer, initalState)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/2')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: "SUCCESS", data: data })
            })
            .catch(() => {
                dispatch({ type: "FAILURE" })

            })
    }, [])

    return (
        <div >
            {
                state?.loading ? `loading........` : state?.data?.name 
            }
        </div>
    )
}
