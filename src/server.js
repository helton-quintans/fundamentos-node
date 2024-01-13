import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req

    if(method === 'GET' && url === '/users') {
        return res.end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'jon',
            email: 'jonhdoe@email.com'
        })
        return res.end('Criação de usuário')
    }

    console.log(method, url)
    return res.end('Hello carai')
})

server.listen(3333)

