const { log } = require('console')
const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Home Page')
        return
    }
    if (req.url === '/about') {
        // Blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('About Page')
        return
    }
    res.end('Error page')
})

server.listen(3000, () => {
    console.log('Server Listening on port 3000...')
})

console.log('tess')