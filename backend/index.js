const express = require("express")
const { createTodo, updateTodo } = require("./types_zod");
const { Todo } = require("./db");
const { title } = require("process");
const cors = require("cors")

const app = express()
const port = 3000;
app.use(cors())

app.use(express.json())

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({})
    res.json({ todos })

})

app.post("/todo", async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "invalid input"
        })
        return;
    }

    //put in mongodb
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })

})

app.put("/completed", async (req, res) => {
    console.log("Put request")
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "invalid input"
        })
        return;
    }

    //update in mongodb
    await Todo.updateOne(
        {
            _id: updatePayload.id
        },
        {
            completed: true
        }
    )
    res.json({
        msg: 'Todo is updated and marked as completed',
    });

})


app.listen(port, () => {
    console.log(`App is listening on PORT : ${port}`)
})