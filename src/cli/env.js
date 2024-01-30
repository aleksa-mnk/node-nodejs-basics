const parseEnv = () => {
    const envVars = Object.entries(process.env)
        .filter(([key, _]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ')

    console.log(envVars)
}

parseEnv()
