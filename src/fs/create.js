import { promises as fs } from 'fs'
import { join } from 'path'

const create = async () => {
    try {
        const filePath = join('src', 'fs', 'files', 'fresh.txt')
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
