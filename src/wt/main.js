import os from 'os'
import path from 'path'
import { Worker } from 'worker_threads'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const createWorker = (workerId) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: 10 + workerId })

        worker.on('message', (result) => resolve({ status: 'resolved', data: result }))
        worker.on('error', (error) => resolve({ status: 'error', data: null }))
        worker.on('exit', (code) => {
            if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`))
        })
    })
}

const performCalculations = async () => {
    const numberOfCores = os.cpus().length
    const workers = Array.from({ length: numberOfCores }, (_, index) => createWorker(index))

    const results = await Promise.all(workers)

    console.log(results)
}

await performCalculations()
