import React from "react";

function Todos(props){

    const todosList = props.todos
    return(
        <>
            {todosList.map((todo, index)=>{
                return(
                    <div className="flex flex-col items-center w-1/5 gap-2 bg-red-200" key={index}>
                        <h1>{todo.title}</h1>  
                        <h2>{todo.description}</h2>
                        <button className="border-2 border-black">{todo.completed ? "Completed" : "Mark as Complete"}</button>
                    </div>
                )
            })}
        </>
        
    )
}
export default Todos;