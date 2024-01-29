import { promises as fs } from 'fs'
import { join } from 'path'

const remove = async () => {
    try {
        const filePath = join('src', 'fs', 'files', 'fileToRemove.txt')

        await fs.access(filePath)

        await fs.unlink(filePath)
    } catch (error) {
        throw new Error('FS operation failed')
    }
}

await remove()
