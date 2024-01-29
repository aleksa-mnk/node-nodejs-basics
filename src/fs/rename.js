import { promises as fs } from 'fs'
import { join } from 'path'

const rename = async () => {
    try {
        const oldPath = join('src', 'fs', 'files', 'wrongFilename.txt')
        const newPath = join('src', 'fs', 'files', 'properFilename.md')

        const oldExists = await fs.access(oldPath).then(() => true).catch(() => false)
        const newExists = await fs.access(newPath).then(() => true).catch(() => false)

        if (!oldExists || newExists) {
            throw new Error('FS operation failed')
        }

        await fs.rename(oldPath, newPath)
    } catch (error) {
        throw error
    }
}

await rename()
