import express from "express"
import {createTodo, updateTodo} from "./types.js"

const app = express()
const port = 3000;

app.use(express.json())

app.get("/todos", (req, res)=>{
    res.json({message: "Hello"})
})

app.post("/todo", (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            message:"You sent the wrong input"
        })
    } return;
    
})
app.put("/completed", (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            message: "You send the wrong input"
        })
    }

})
app.listen(port, ()=>{console.log("Port is Running successfully")})