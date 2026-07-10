import http from 'node:http'
import { Database } from './database.js'
import { json } from './middlewares/json.js'
import crypto from 'node:crypto'
import { routes } from './routes.js'

const users = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    console.log(route)

    if (route) {
        const routeParams = req.url.match(route.path)
        req.params = {...routeParams.groups}
        return route.handler(req, res)
    }

    return res.writeHead(404).end('Not found')
})

server.listen(3333)

