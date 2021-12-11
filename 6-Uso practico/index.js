const express = require('express');
const services = require('./services');

// para generalizar las tareas
const handlify = require('./handlers');
const userHandlers = handlify('users');
const postsHandlers = handlify('posts');

const parser = require('body-parser');
const app = express();
const port = 3000;

app.use( parser.urlencoded({ extended: false }) )
app.use( parser.json() )

// se aplica currying y point free
app.get('/', userHandlers(services).get );
app.post('/', userHandlers(services).post );
app.put('/:id', userHandlers(services).put );
app.delete('/:id', userHandlers(services).delete );
app.get('/posts', postsHandlers(services).get );
app.listen(port, () => console.log(`Servidor escuchando en puerto: ${port}!`))