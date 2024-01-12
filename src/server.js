import http from 'node:http'

const server = http.createServer((req, res) => {
    return res.end('Hello carai')
})

server.listen(3333)

