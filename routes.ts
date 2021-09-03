import {
    getProjectHandler,
} from "./controller/project.controller";
import { Express, Request, Response } from 'express'

export default function (app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

    // Get all projects

    // Get one project
    app.get("/api/projects/:projectId", getProjectHandler);

    // Create project

    // Update project

    // Toggle complete project

    // Delete project
}