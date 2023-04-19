import { Schema, model } from 'mongoose';
import { Project } from '../interfaces/Project.interface';

const projectSchema = new Schema<Project>(
   {
      name: { type: String, required: true },
      description: { type: String, required: true },
      linkWeb: { type: String },
      linkGitHub: { type: String, required: true },
   },
   {
      timestamps: true,
      versionKey: false,
   }
);

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };
