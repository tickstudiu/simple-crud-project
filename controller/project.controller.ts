import { Request, Response } from 'express'
import { get } from 'lodash'
import {
    findProject,
    createProject,
} from '../service/project.service'

export async function createPostHandler(req: Request, res: Response) {
    const body = req.body

    const project = await createProject(body)

    return res.send(project)
}

export async function getProjectHandler(req: Request, res: Response) {
    const projectId = get(req, 'params.projectId')
    const project = await findProject({ projectId })

    if (!project) {
        return res.sendStatus(404)
    }

    return res.send(project)
}