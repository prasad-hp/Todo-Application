import express, { urlencoded } from "express"
import {createTodo, updateTodo} from "./types.js"
import Todo from "./schemaDB.js";

const app = express()
const port = 3000;

app.use(express.json())
app.unsubscribe(urlencoded({extended:false}))

app.get("/todos", async(req, res)=>{
    try {
        const todos = await Todo.find()
        res.json(todos)
        
    } catch (error) {
    res.status(500).json(error.message)
    }
})

app.post("/todo", async(req, res)=>{
    try {
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload)
        if(!parsedPayload.success){
            res.status(411).json({
                message:"You sent the wrong input"
            }) 
            return;
        }
        await Todo.create({
            title:createPayload.title,
            description:createPayload.description,
            completed:false
        })
        res.json({
            msg: "Todo is created"
        })
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }

    
})
app.put("/completed", async(req, res)=>{
    try {
        const updatePayload = req.body;
        const parsedPayload = updateTodo.safeParse(updatePayload)
        if(!parsedPayload.success){
            res.status(411).json({
                message: "You send the wrong input"
            })
        }
        const {id} = req.body;
        await Todo.updateOne({
            _id : req.body.id
        }, {
            completed: true
        })
        res.status(200).json({message: "Todo Updated"})
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }
})
app.listen(port, ()=>{console.log("Port is Running successfully")})