import {
    getProjectHandler,
    getProjectsHandler,
    createPostHandler,
} from './controller/project.controller'
import {
    createProjectSchema,
} from "./schema/project.schema"
import { Express, Request, Response } from 'express'
import { validateRequest } from './middleware'

export default function (app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

    // Get all projects
    app.get('/api/projects', getProjectsHandler)

    // Get one project
    app.get('/api/projects/:projectId', getProjectHandler)

    // Create project
    app.post('/api/projects', [validateRequest(createProjectSchema)], createPostHandler)

    // Update project

    // Delete project
}