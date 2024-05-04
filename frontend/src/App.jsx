import React, { useState } from "react"
import CreateTodo from "../components/CreateTodo"
import Todos from "../components/Todos"
import axios from "axios"

function App() {
  const [todos, setTodos] = useState([])

  async function getTodos(){
    try {
      axios.get("http://localhost:3000/todos")
      .then((response)=>{
        console.log(response)
      })
    } catch (error) {
      console.error(error)
    }
  }
  getTodos()
  return (
    <>
      <CreateTodo />
      <Todos todos = {todos}/>
    </>
  )
}

export default App
