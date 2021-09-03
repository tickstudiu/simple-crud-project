import mongoose from 'mongoose'
import config from 'config'
import log from '../helpers/logger'

function connect() {
    const dbUri = config.get('dbUri') as string

    return mongoose
        .connect(dbUri)
        .then(() => {
            log.info('Database connected')
        })
        .catch((error: any) => {
            log.error('db error', error)
            process.exit(1)
        });
}

export default connect