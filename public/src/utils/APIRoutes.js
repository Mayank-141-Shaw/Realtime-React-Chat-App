const host = `http://localhost:${ process.env.SERVER_PORT }`

export const registerRoute = `${ host }/api/auth/register`

export const loginRoute = `${ host }/api/auth/login`