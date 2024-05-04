import axios from "axios";
import React from "react";

function Todos(props){

    const todosList = props.todos
    return(
        <div className="grid grid-flow-col gap-2">
            {todosList.map((todo, index)=>{
                return(
                    <div className="gap-2 bg-red-200 mt-4 py-2 rounded-lg" key={index}>
                        <h1 className="font-semibold">{todo.title}</h1>  
                        <h2>{todo.description}</h2>
                        <button className="border-2 border-black rounded-md bg-green-700 text-white p-1.5" onClick={
                            async()=>{
                                try {
                                    await axios.put("http://localhost:3000/completed",{
                                        completed:true
                                    })

                                } catch (error) {
                                    console.error(error)
                                }
                            }
                        }>{todo.completed ? "Completed" : "Mark as Complete"}</button>
                    </div>
                )
            })}
        </div>
        
    )
}
export default Todos;