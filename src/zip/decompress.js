import { createReadStream, createWriteStream } from 'fs'
import { createGunzip } from 'zlib'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const decompress = async () => {
    const sourceFilePath = path.join(__dirname, 'files', 'archive.gz')
    const destinationFilePath = path.join(__dirname, 'files', 'fileDecompressed.txt')

    const sourceStream = createReadStream(sourceFilePath)
    const destinationStream = createWriteStream(destinationFilePath)
    const gunzip = createGunzip()

    sourceStream.pipe(gunzip).pipe(destinationStream)
}

await decompress()
