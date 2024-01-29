import { promises as fs } from 'fs'
import { join } from 'path'
import { cp } from 'fs/promises'

const copy = async () => {
    try {
        const sourceFolder = join('src', 'fs', 'files')
        const targetFolder = join('src', 'fs', 'files_copy')

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
