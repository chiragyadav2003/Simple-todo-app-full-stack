import { useState } from "react"

function CreateTodo() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div>
            <br />
            <input type="text" placeholder="title" onChange={(e) => {
                const value = e.target.value
                setTitle(value)
            }} />
            <br />            <br />
            <input type="text" placeholder="description" onChange={(e) => {
                const value = e.target.value
                setDescription(value)
            }} />
            <br />            <br />
            <button onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description
                    })
                })
            }}>Add a TODO</button>
        </div>
    )
}

export default CreateTodo