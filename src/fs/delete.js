import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const remove = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'fileToRemove.txt')

        await fs.access(filePath)

        await fs.unlink(filePath)
    } catch (error) {
        throw new Error('FS operation failed')
    }
}

await remove()
