import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const create = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'fresh.txt')
        try {
            await fs.access(filePath)
            throw new Error('FS operation failed')
        } catch (error) {
            await fs.writeFile(filePath, 'I am fresh and young')
        }
    } catch (error) {
        throw error
    }
}

create().catch(err => console.error(err))
