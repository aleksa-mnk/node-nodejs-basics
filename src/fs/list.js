import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const list = async () => {
    try {
        const folderPath = path.join(__dirname, 'files')

        await fs.access(folderPath)

        const files = await fs.readdir(folderPath)
        console.log(files)
    } catch (error) {
        throw new Error('FS operation failed')
    }
}

await list()
