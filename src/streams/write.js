import { createWriteStream } from 'fs'
import { join } from 'path'

const write = async () => {
    const filePath = join('src', 'streams', 'files', 'fileToWrite.txt')
    const writeStream = createWriteStream(filePath)

    process.stdin.pipe(writeStream)
}

await write()
