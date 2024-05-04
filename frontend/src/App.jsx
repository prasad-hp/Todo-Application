import React, { useEffect, useState } from "react"
import CreateTodo from "../components/CreateTodo"
import Todos from "../components/Todos"
import axios from "axios"


function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    async function getTodos(){
      try {
        const response = await axios.get("http://localhost:3000/todos")
        setTodos(response.data)
        }
      catch (error) {
        console.error(error)
      }
    }
    getTodos() 
  }, [])
  return (
    <>
      <CreateTodo />
      <Todos todos = {todos}/>
    </>
  )
}

export default App
