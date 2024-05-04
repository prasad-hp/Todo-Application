import React from "react";

function Todos(props){

    const todosList = props.todos
    console.log(todosList)
    const todoList = todosList.map((todo, index)=>{
        return(
            <div className="flex flex-col items-center w-1/5 gap-2" key={index}>
                <h1>{todo.title}</h1>  
                <h2>{todo.description}</h2>
                <button className="bg-green-500">{todo.compleated ? "Completed" : "Mark as Compleate"}</button>
            </div>
        )
    })
    return(
        <>
            {todoList}
        </>
        
    )
}
export default Todos;