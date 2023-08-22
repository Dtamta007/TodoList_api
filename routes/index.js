const router = require('express').Router();
const Todo = require('../models/Todo');

// Fetching data in batches

router.get("/todo", async (req,res) => {
    try{
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 3;
        let skip = (page-1)*limit;

        const todos = await Todo.find().skip(skip).limit(limit);
        res.status(200).json({todos, hits: todos.length});
    }catch(err){
        res.status(500).json(err);
    }
})

// Adding data to the database

router.post("/add", async (req, res) => {
    const newTodo = new Todo(req.body);
    try{
        const todo = await newTodo.save();
        res.status(200).json(todo);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;