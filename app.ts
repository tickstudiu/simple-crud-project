import express from 'express'
import config from 'config'
import log from './helpers/logger'
import morgan  from'./helpers/morgan'
import connect from './db/connect'
import routes from './routes'

const port = config.get('port') as number
const host = config.get('host') as string

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// morgan
app.use(morgan.successHandler)
app.use(morgan.errorHandler)

// run app
app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`)

    connect()

    routes(app)
});