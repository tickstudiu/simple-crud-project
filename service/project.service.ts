import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
} from "mongoose";
import Project, { ProjectDocument } from "../model/project.model"

export function findProject(
    query: FilterQuery<ProjectDocument>,
    options: QueryOptions = { lean: true }
) {
    return Project.findOne(query, {}, options);
}