function createTask (id, value, done = false) {
	return { id, value, done }
}

module.exports = createTask