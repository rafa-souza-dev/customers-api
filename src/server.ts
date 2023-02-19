import { app } from "./app"
import { env } from "./env"

export var SERVER_HOST: string;

async function setServerHost(server: string): Promise<void> {
    SERVER_HOST = server
}

if (env.NODE_ENV !== 'test') {
    app.listen({
        host: env.HOST,
        port: env.PORT,
    }).then(async (server) => await setServerHost(server))
}
