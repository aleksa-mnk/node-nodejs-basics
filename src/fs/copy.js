import { promises as fs } from 'fs'
import { cp } from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copy = async () => {
    try {
        const sourceFolder = path.join(__dirname, 'files')
        const targetFolder = path.join(__dirname, 'files_copy')

        const sourceExists = await fs.access(sourceFolder).then(() => true).catch(() => false)
        const targetExists = await fs.access(targetFolder).then(() => true).catch(() => false)

        if (!sourceExists || targetExists) {
            throw new Error('FS operation failed')
        }

        await cp(sourceFolder, targetFolder, { recursive: true })
    } catch (error) {
        throw error
    }
}

await copy()
