import colors from 'colors'
import { db } from '../config'
import { Pool, PoolConfig } from 'pg'
import Logger from '../helpers/Logger'

const { user, password, host, database, port } = db

const poolConfig = {
    user,
    password,
    host,
    database,
    port: +port,
    max: 5,
    idleTimeoutMillis: 40000
}

export const pool = new Pool(poolConfig)

pool.on('connect', () => {
    // Logger.info(colors.green('Connection to the database has been established successfully.'))
})

pool.on('error', (err, client) => {
    let message

    message += `${colors.magenta('[  DB  ]')} *** CONEXIÓN INICIADA ERRADA POR:\n`
    message += `${colors.magenta('[  DB  ]')} *** NOMBRE:\t${err.name}\n`
    message += `${colors.magenta('[  DB  ]')} *** MENSAJE:\t${err.message}`
    const stack = err.stack
    Logger.error(message, stack)
    throw err
})

pool.on('remove', (client) => {
    const message = `[${colors.blue(client.processID)}]${colors.green('[  OPEN ]')} Conexion Client Pool Postgrest Finalizada.`
    Logger.info(`${colors.magenta('[  DB  ]')} *** ${message}`)
})