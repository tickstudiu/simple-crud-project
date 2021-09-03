
import { object, string, boolean } from "yup"

const payload = {
    body: object({
        title: string().required("Title is required"),
        details: string()
            .required("Details is required"),
        complete: boolean().default(true)
    }),
};

const params = {
    params: object({
        projectId: string().required("projectId is required"),
    }),
};

export const createProjectSchema = object({
    ...payload,
});

export const updateProjectSchema = object({
    ...params,
    ...payload,
});

export const deleteProjectSchema = object({
    ...params,
});