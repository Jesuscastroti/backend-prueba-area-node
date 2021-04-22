
// export const port = process.env.PORT || 3000
export const port = 19500
export const name = "API"
export const db = {
    database: process.env.DATABASE_PG || 'prueba-area',
    host: process.env.HOST_PG || 'localhost',
    user: process.env.USER_PG || 'postgres',
    password: process.env.PASSWORD_PG || '1234',
    port: process.env.PORT_PG || '5432'
}
export const api = {
    prefix: '/api/v1'
}
