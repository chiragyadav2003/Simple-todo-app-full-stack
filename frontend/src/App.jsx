import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import { useEffect, useState } from 'react'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return setTodos(data.todos)
      })
  }, [])


  // fetch("http://localhost:3000/todos")
  //   .then(async function (res) {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })


  return (
    <div>
      <CreateTodo />

      {/* <Todos todos={[{
        title: "njknkj",
        description: "kjnkokokj",
        completed: true
      },]} /> */}

      <Todos todos={todos} />


    </div>
  )
}

export default App
