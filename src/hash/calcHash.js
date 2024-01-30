import { createReadStream } from 'fs'
import { createHash } from 'crypto'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const calculateHash = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
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
