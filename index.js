const router = require('./router/index.js')

const express = require('express')
const server = express()

server.use(express.json())

server.get("/", (req, res) => {
    res.send('Welcome to my API')
})

server.use('/api/posts', router)

server.listen(5000, () => {
    console.log("Server started on port 5000")
})