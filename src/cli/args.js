const parseArgs = () => {
    const args = process.argv.slice(2)
    let output = ''

    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace('--', '')
        const value = args[i + 1]
        output += `${key} is ${value}, `
    }

    output = output.substring(0, output.length - 2)
    console.log(output);
}

parseArgs()
