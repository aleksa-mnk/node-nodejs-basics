import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'
import { join } from 'path'

const compress = async () => {
    const sourceFilePath = join('src', 'zip', 'files', 'fileToCompress.txt')
    const destinationFilePath = join('src', 'zip', 'files', 'archive.gz')

    const sourceStream = createReadStream(sourceFilePath)
    const destinationStream = createWriteStream(destinationFilePath)
    const gzip = createGzip()

    sourceStream.pipe(gzip).pipe(destinationStream)
}

await compress()
