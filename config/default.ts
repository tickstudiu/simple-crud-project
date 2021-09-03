import dotenv from 'dotenv'
import path from 'path'
import {envSchema} from '../schema/env.schema'
import log from '../helpers/logger'


dotenv.config({ path: path.join(__dirname, '../.env') })

envSchema.validate(process.env).catch((error) => {
    log.error('env error', error.name)
    process.exit(1)
})

export default {
    isProduction: process.env.isProduction,
    port: process.env.port,
    host: process.env.host,
    dbUri: process.env.dbUri
}