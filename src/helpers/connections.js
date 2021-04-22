import { Client } from 'pg'
export const createConectionPG = () => {
    const credentials = {
        hostname: 'localhost',
        username: 'postgres',
        password: '1234',
        database: 'prueba-area',
        port_db: '5432'
    }
    try {
        const client = new Client("postgres://"+credentials.username+":"+credentials.password+"@"+credentials.hostname+":"+credentials.port_db+"/"+credentials.database+"")
        return client
    } catch (error) {
        console.log('erroooor', error)
    }
}

