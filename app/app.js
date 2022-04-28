const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/' + config.api.version, require('./src/task/router'))

app.listen(config.express.port, () => console.log(`Example app running!`))