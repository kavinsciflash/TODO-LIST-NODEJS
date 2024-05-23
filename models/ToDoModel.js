const mongoose = require("mongoose")

const ToDoSchema = new mongoose.Schema({
    todos: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("todos", ToDoSchema);