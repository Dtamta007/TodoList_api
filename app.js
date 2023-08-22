const express = require('express');
const mongoose = require('mongoose');

// Requiring routers
const TodoRouter = require('./routes/index');

// Meta Data
const PORT = 8800;
const app = express();

// Connecting to MongoDB
mongoose.connect("mongodb+srv://deepanshu:deepanshu@cluster0.5ckqr.mongodb.net/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Connected to Database!");
}).catch((err)=> {
    console.log(err);
})

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use(TodoRouter);

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));