import { Transform, pipeline } from 'stream'

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, _encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''))
            callback()
        }
    })

    pipeline(
        process.stdin,
        reverseStream,
        process.stdout,
        (err) => {
            if (err) {
                console.error('Pipeline failed.', err)
            } else {
                console.log('Pipeline succeeded.')
            }
        }
    )
}

await transform()
