
import mongoose from 'mongoose'

export interface ProjectDocument extends mongoose.Document {
    title: string
    details: string
    complete: boolean
    createdAt: Date
    updatedAt: Date
}

const ProjectSchema = new mongoose.Schema(
    {
        title: { type: String, default: true },
        details: { type: String, default: true },
        complete: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const Project = mongoose.model<ProjectDocument>("Project", ProjectSchema)

export default Project