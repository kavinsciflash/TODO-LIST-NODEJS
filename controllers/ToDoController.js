const ToDoModel = require("../models/ToDoModel")

module.exports.getToDo = async (req, res) => {
    const todos = await ToDoModel.find()
    res.send(todos)
}

module.exports.createToDo = (req, res) => {
    const { todos } = req.body;
    ToDoModel.create({ todos })
    .then((data) => {
        console.log("saved successfully..")
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err);
        res.send({ error: err, message : "something went wrong!"})
    })
}


module.exports.updateToDo = (req, res) => {
    const { id } = req.params;
    const { todos } = req.body;
    ToDoModel.findByIdAndUpdate(id, { todos })
        .then(() => {
            res.status(201).send("updated successfully..")
        }).catch((err) => {
            console.log(err);
            res.send({ error: err, message: "something went wrong!" })
        })
}

module.exports.deleteToDo = (req, res) => {
    const { id } = req.params;
    console.log(id)
    ToDoModel.findByIdAndDelete(id)
        .then((data) => {
            res.status(201).send("deleted successfully..")
        }).catch((err) => {
            console.log(err);
            res.send({ error: err, message: "something went wrong!" })
        })
}