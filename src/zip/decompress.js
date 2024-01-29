import { createReadStream, createWriteStream } from 'fs'
import { createGunzip } from 'zlib'
import { join } from 'path'

const decompress = async () => {
    const sourceFilePath = join('src', 'zip', 'files', 'archive.gz')
    const destinationFilePath = join('src', 'zip', 'files', 'fileToCompress.txt')

    const sourceStream = createReadStream(sourceFilePath)
    const destinationStream = createWriteStream(destinationFilePath)
    const gunzip = createGunzip()

    sourceStream.pipe(gunzip).pipe(destinationStream)
}

await decompress()
