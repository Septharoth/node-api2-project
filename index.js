const router = require('./router/index.js')
const port = process.env.PORT || 5000
const express = require('express')
const server = express()

server.use(express.json())

server.get("/", (req, res) => {
    res.send('Welcome to my API')
})

server.use('/api/posts', router)

server.listen(port, () => {
    console.log("Server started on port 5000")
})