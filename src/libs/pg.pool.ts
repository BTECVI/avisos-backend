import { Pool } from 'pg'
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DBNAME } from '@src/utils/config'

const port = () => {
  if(DB_PORT !== undefined) {
    return +DB_PORT
  }
  else {
    return -1
  }
}
console.log(port())
const pool = new Pool({
  host: DB_HOST,
  port: port(),
  user: DB_USER,
  password: DB_PASS,
  database: DB_DBNAME,
  max: 10,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
})

pool.on('error', (err: any) => console.error(err))

export default pool
 