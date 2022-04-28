const express = require('express')
const Tasks = require('./Tasks')
const taskRoutes = require('./routes')
const router = express.Router()

const tasks = new Tasks()
tasks.add("learn react")
tasks.add("Go shopping", true)
tasks.add("Go shopping", true)


router.get(taskRoutes.get, (req, res) => {
    return res.json({ data: tasks.tasks, status: "success" })
})

router.post(taskRoutes.add, (req, res) => {
    tasks.add(req.body.value)
    return res.json({ data: tasks.tasks, status: 'success' })
})

router.delete(taskRoutes.delete, (req, res) => {
    tasks.delete(req.body.id)
    return res.json({ data: tasks.tasks, status: 'success' })
})

router.patch(taskRoutes.update, (req, res) => {
    tasks.update(req.body.id, req.body.done)
    return res.json({ data: tasks.tasks, status: 'success' })
})

module.exports = router