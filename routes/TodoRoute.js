const { Router } = require("express")

const { getToDo, createToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController")

const router = Router()

router.get("/get-todo", getToDo)
router.post("/create-todo", createToDo)
router.put("/update-todo/:id", updateToDo)
router.delete("/delete-todo/:id", deleteToDo)

module.exports = router;