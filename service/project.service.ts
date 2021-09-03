import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
} from "mongoose";
import Project, { ProjectDocument } from "../model/project.model"

export function createProject(input: DocumentDefinition<ProjectDocument>) {
    return Project.create(input)
}

export function findsProject(
    options: QueryOptions = { lean: true }
) {
    return Project.find({}, {}, options);
}

export function findProject(
    query: FilterQuery<ProjectDocument>,
    options: QueryOptions = { lean: true }
) {
    return Project.findOne(query, {}, options);
}