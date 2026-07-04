// process.stdin
//     .pipe(process.stdout)

// Objective: Able to work with data received in chunks.

import { Readable, Writable, Transform } from 'node:stream'

//Readble Stream - ex. read csv file, read from a database, read from an API, etc
class OneToHundredStream extends Readable {
    index = 1

    _read() {
        //simulate a slow data source
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
    .pipe(new ConvertToNegativeNumberStream) // ReadableStream => TransformStream
    .pipe(new MultpliyByStream()) // WritableStream