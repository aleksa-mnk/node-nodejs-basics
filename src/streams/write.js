import { createWriteStream } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt')
    const writeStream = createWriteStream(filePath)

    process.stdin.pipe(writeStream)
}

await write()
