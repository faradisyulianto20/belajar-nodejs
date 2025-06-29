// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name, id, gender)=>{
//     console.log(`data recieved ${name}, ${id} ${gender}`)
// })


// customEmitter.on('response2', (id, name, gender)=>{
//     console.log(`some other logic here `)
// })

// customEmitter.on('response', ()=>{
//     console.log(`some another logic here `)
// })

// customEmitter.emit('response', 'john', 34, 'male')
// customEmitter.emit('response2')

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(3000)