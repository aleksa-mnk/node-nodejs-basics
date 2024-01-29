import { promises as fs } from 'fs'
import { join } from 'path'

const read = async () => {
    try {
        const filePath = join('src', 'fs', 'files', 'fileToRead.txt')

        await fs.access(filePath)

        const content = await fs.readFile(filePath, 'utf8')
        console.log(content)
    } catch (error) {
        throw new Error('FS operation failed')
    }
}

await read()
