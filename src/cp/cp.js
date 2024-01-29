import { spawn } from 'child_process'
import { join } from 'path'

const spawnChildProcess = async (args) => {
    const scriptPath = join('src', 'cp', 'files', 'script.js')

    const child = spawn('node', [scriptPath, ...args], { stdio: ['inherit', 'inherit', 'pipe'] })

    child.stderr.on('data', (data) => {
        console.error(`Child stderr: ${data}`)
    })

    child.on('close', (code) => {
        console.log(`Child process exited with code ${code}`)
    })
}

spawnChildProcess(['arg1', 'arg2'])
