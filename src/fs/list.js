import { promises as fs } from 'fs'
import { join } from 'path'

const list = async () => {
    try {
        const folderPath = join('src', 'fs', 'files')

        await fs.access(folderPath)

        const files = await fs.readdir(folderPath)
        console.log(files)
    } catch (error) {
        throw new Error('FS operation failed')
    }
}

await list()
