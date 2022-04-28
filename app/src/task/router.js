const express = require('express')
const Tasks = require('./Tasks')
const router = express.Router()

const tasks = new Tasks()
tasks.add("learn react")
tasks.add("Go shopping", true)
tasks.add("Go shopping", true)


router.get('/task', (req, res) => {
    return res.json({ data: tasks.tasks, status: "success" })
})

router.post('/task', (req, res) => {
    tasks.add(req.body.value)
    return res.json({ data: tasks.tasks, status: 'success' })
})

router.delete('/task/:id', (req, res) => {
    tasks.delete(req.params.id)
    return res.json({ data: tasks.tasks, status: 'success' })
})

router.patch('/task/:id', (req, res) => {
    tasks.update(req.params.id, req.body.done)
    return res.json({ data: tasks.tasks, status: 'success' })
})

module.exports = router