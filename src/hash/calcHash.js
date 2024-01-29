import { createReadStream } from 'fs'
import { createHash } from 'crypto'
import { join } from 'path'

const calculateHash = async () => {
    try {
        const filePath = join('src', 'hash', 'files', 'fileToCalculateHashFor.txt')
        const hash = createHash('sha256')
        const stream = createReadStream(filePath)

        stream.on('data', data => hash.update(data))
        stream.on('end', () => {
            const result = hash.digest('hex')
            console.log(result)
        })
    } catch (error) {
        console.error('Error calculating hash:', error.message)
    }
}

await calculateHash()
