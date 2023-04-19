import { Study } from '../interfaces/Study.interface';
import { StudyModel } from '../models/Study.model';

const getAll = async () => {
   const responseItems = await StudyModel.find();
   return responseItems;
};

const getById = async (id: string) => {
   const responseItem = await StudyModel.findById(id);
   return responseItem;
};

const insert = async (study: Study) => {
   const responseItem = await StudyModel.create(study);
   return responseItem;
};

const update = async (id: string, study: Study) => {
   const responseItem = await StudyModel.findByIdAndUpdate(id, study, { new: true });
   return responseItem;
};

const deleteById = async (id: string) => {
   const responseItem = await StudyModel.findByIdAndDelete(id);
   return responseItem;
};

export { getAll, getById, insert, update, deleteById };
