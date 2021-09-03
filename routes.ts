import {
    getProjectHandler,
    getProjectsHandler,
    createPostHandler,
    deleteProjectHandler,
    updateProjectHandler
} from './controller/project.controller'
import {
    createProjectSchema,
    deleteProjectSchema,
    updateProjectSchema
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
    app.put('/api/projects/:projectId', [validateRequest(updateProjectSchema)], updateProjectHandler)

    // Delete project
    app.delete('/api/projects/:projectId', [validateRequest(deleteProjectSchema)], deleteProjectHandler)
}