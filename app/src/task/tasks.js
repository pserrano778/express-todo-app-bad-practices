const createTask = require('./Task')

class Tasks {
	nextId
	tasks

	constructor () {
		this.nextId = 1
		this.tasks = []
	}

	add (value, done = false) {
		const task = createTask(this.nextId, value, done)
		this.tasks = [...this.tasks, task]
		this.nextId ++
	}

	get (id) {
		return this.tasks.find(task => task.id === id)
	}

	delete (id) {
		this.tasks = this.tasks.filter(task => task.id !== id)
	}

	update (id, done) {
		const task = this.tasks.find(task => task.id === id)
		task.done = done
	}
}

module.exports = Tasks