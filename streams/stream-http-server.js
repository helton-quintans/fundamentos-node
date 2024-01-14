import http from 'node:http'
import { Transform } from 'node:stream'

class ConvertToNegativeNumberStream extends Transform {
    _transform(chunck, enconding, callback) {
        const transformed = Number(chunck.toString()) * -1

        console.log(transformed)

        callback(
            null, 
            Buffer.from(String(transformed))
        )
    }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer((req, res) => {
    return req
        .pipe(new ConvertToNegativeNumberStream())
        .pipe(res)
})

server.listen(3334)