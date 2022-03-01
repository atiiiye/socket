const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const server = require('http').createServer();
const io = require('socket.io')(server);

const cors = require('cors');

app.use(cors({
    origin: 'http://127.0.0.1:5500/client'
}))

// app.get('/', (req, res) => {
//     res.send('server running')
// })


// const mySocket = io.of('/socket')

io.on('connection', (socket) => {
    console.log('connected')
    socket.on("new-user", (msg) => {
        console.log(msg)
        // io.emit('recieve-message', message)
    });

    socket.on("disconnect", () => console.log('disconnected'))
})

server.listen(port, () => console.log(`server running on ${port} ...`))

