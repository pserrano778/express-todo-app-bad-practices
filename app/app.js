const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
const port = 8000

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', require('./task/router'))

app.listen(port, () => console.log(`Example app running!`))