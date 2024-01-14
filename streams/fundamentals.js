// process.stdin
//     .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if(i > 100) {
                this.push(null)
            } else {
                const buf  = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000)
    }
}

class MultpliyByStream extends Writable {
    _write(chunck, enconding, callback) {
        console.log(Number(chunck.toString()) * 10) 

        callback()
    }
}

class ConvertToNegativeNumberStream extends Transform {
    _transform(chunck, enconding, callback) {
        const transformed = Number(chunck.toString()) * -1

        callback(
            null, 
            Buffer.from(String(transformed))
        )
    }
}

new OneToHundredStream()
    .pipe(new ConvertToNegativeNumberStream)
    .pipe(new MultpliyByStream())