import { spawn } from 'child_process'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const spawnChildProcess = async (args) => {
    const scriptPath = join(__dirname, 'files', 'script.js')

    const child = spawn('node', [scriptPath, ...args], { stdio: ['inherit', 'inherit', 'pipe'] })

    child.stderr.on('data', (data) => {
        console.error(`Child stderr: ${data}`)
    })

    child.on('close', (code) => {
        console.log(`Child process exited with code ${code}`)
    })
}

spawnChildProcess(['arg1', 'arg2'])
