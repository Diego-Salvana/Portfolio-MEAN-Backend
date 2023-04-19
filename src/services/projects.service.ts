import { Project } from '../interfaces/Project.interface';
import { ProjectModel } from '../models/Project.model';

const getAll = async () => {
   const responseItems = await ProjectModel.find();
   return responseItems;
};

const getById = async (id: string) => {
   const responseItem = await ProjectModel.findById(id);
   return responseItem;
};

const insert = async (project: Project) => {
   const responseItem = await ProjectModel.create(project);
   return responseItem;
};

const update = async (id: string, project: Project) => {
   const responseItem = await ProjectModel.findByIdAndUpdate(id, project, { new: true });
   return responseItem;
};

const deleteById = async (id: string) => {
   const responseItem = await ProjectModel.findByIdAndDelete(id);
   return responseItem;
};

export { getAll, getById, insert, update, deleteById };
