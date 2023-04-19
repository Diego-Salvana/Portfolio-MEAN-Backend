import { Skill } from '../interfaces/Skill.interface';
import { SkillModel } from '../models/Skill.model';

const getAll = async () => {
   const responseItems = await SkillModel.find();
   return responseItems;
};

const getById = async (id: string) => {
   const responseItem = await SkillModel.findById(id);
   return responseItem;
};

const insert = async (skill: Skill) => {
   const responseItem = await SkillModel.create(skill);
   return responseItem;
};

const update = async (id: string, skill: Skill) => {
   const responseItem = await SkillModel.findByIdAndUpdate(id, skill, { new: true });
   return responseItem;
};

const deleteById = async (id: string) => {
   const responseItem = await SkillModel.findByIdAndDelete(id);
   return responseItem;
};

export { getAll, getById, insert, update, deleteById };
