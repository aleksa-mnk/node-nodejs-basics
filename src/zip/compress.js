import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compress = async () => {
    const sourceFilePath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const destinationFilePath = path.join(__dirname, 'files', 'archive.gz')

    const sourceStream = createReadStream(sourceFilePath)
    const destinationStream = createWriteStream(destinationFilePath)
    const gzip = createGzip()

    sourceStream.pipe(gzip).pipe(destinationStream)
}

await compress()
