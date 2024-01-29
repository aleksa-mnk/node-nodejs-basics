import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rename = async () => {
    try {
        const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt')
        const newPath = path.join(__dirname, 'files', 'properFilename.md')

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
