import { Worker } from 'worker_threads'
import os from 'os'

const performCalculations = async () => {
    const numCores = os.cpus().length
    let workers = []
    let results = []

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker('./src/wt/worker.js')
        worker.postMessage(10 + i)

        workers.push(new Promise((resolve, reject) => {
            worker.on('message', (result) => resolve({ status: 'resolved', data: result }))
            worker.on('error', (error) => resolve({ status: 'error', data: null }))
            worker.on('exit', (code) => {
                if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`))
            })
        }))
    }

    results = await Promise.all(workers)
    console.log(results)
}

await performCalculations()
