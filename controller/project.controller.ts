import { Request, Response } from 'express'
import { get } from 'lodash'
import {
    findProject,
    createProject,
    findsProject,
    findProjectAndUpdate,
    deleteProject
} from '../service/project.service'

export async function createPostHandler(req: Request, res: Response) {
    const body = req.body

    const project = await createProject(body)

    return res.send(project)
}

export async function updateProjectHandler(req: Request, res: Response) {
    const projectId = get(req, 'params.projectId')
    const project = await findProject({ projectId })
    const update = req.body

    if (!project) {
        return res.sendStatus(404)
    }

    const updatedProject = await findProjectAndUpdate({ projectId }, update, { new: true })

    return res.send(updatedProject)
}

export async function getProjectHandler(req: Request, res: Response) {
    const projectId = get(req, 'params.projectId')
    const project = await findProject({ projectId })

    if (!project) {
        return res.sendStatus(404)
    }

    return res.send(project)
}

export async function getProjectsHandler(req: Request, res: Response) {
    const projects = await findsProject()

    if (!projects) {
        return res.sendStatus(404)
    }

    return res.send(projects)
}

export async function deleteProjectHandler(req: Request, res: Response) {
    const projectId = get(req, 'params.projectId')
    const project = await findProject({ projectId })

    if (!project) {
        return res.sendStatus(404)
    }

    await deleteProject({ projectId })

    return res.sendStatus(200)
}