import { object, boolean, string, number } from "yup"

export const envSchema = object({
    isProduction: boolean().required("isProduction is required"),
    port: number().required("port is required"),
    host: string().required("host is required"),
    dbUri: string().required("dbUri is required")
});