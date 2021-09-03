import { Express, Request, Response } from "express";
import morgan from 'morgan'
import log from './logger'
import config from 'config'


morgan.token('message', (req: Request, res: Response) => res.locals.errorMessage || '')

const isProduction = config.get('isProduction') as boolean
const getIpFormat = () => (isProduction ? ':remote-addr - ' : '')

const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`

const successHandler = morgan(successResponseFormat, {
    skip: (req: Request, res: Response) => res.statusCode >= 400,
    stream: { write: (message) => log.info(message.trim()) },
});

const errorHandler = morgan(errorResponseFormat, {
    skip: (req: Request, res: Response) => res.statusCode < 400,
    stream: { write: (message) => log.error(message.trim()) },
});

export default {
    successHandler,
    errorHandler,
};