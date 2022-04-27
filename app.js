express = require('express')
bodyParser = require('body-parser')

app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var todoItems = [];
todoItems.push({ index: 1, value: "learn react", done: false });
todoItems.push({ index: 2, value: "Go shopping", done: true });
todoItems.push({ index: 3, value: "buy flowers", done: true });
var index = 5;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/task', (req, res) => {
    return res.json({ data: todoItems, status: "success" })
})

app.post('/task', (req, res) => {
    todoItems.push({
        index: index++,
        value: req.body.value,
        done: false,
    })
    return res.json({ data: todoItems, status: 'success' })
})

app.delete('/task/:id', (req, res) => {
    var todoItems = todoItems.filter(d => d.index != +req.params.id)
    return res.json({ data: todoItems, status: 'success' })
})

app.patch('/task/:id', (req, res) => {
    todoItems.filter(d => d.index == +req.params.id)[0].done = req.body.done
    return res.json({ data: todoItems, status: 'success' })
})


app.listen(8000, () => console.log(`Example app running!`))