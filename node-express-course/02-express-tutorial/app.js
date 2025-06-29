// console.log('Express Tutorial')
// console.log('Tes nodemon');


const http = require('http')

const {readFileSync} = require('fs')

const homePage = readFileSync('./index.html')
const homeStyle = readFileSync('./style.css')

const server = http.createServer((req, res)=> {
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if (url === '/style.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
    else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Page is not Found</h1>')
        res.end()
    }
    // console.log('user hit the server');
})

server.listen(3000)

