import { AboutMe } from '../interfaces/AboutMe.interface';
import { AboutMeModel } from '../models/AboutMe.model';

const get = async () => {
   const responseItem = await AboutMeModel.findOne({ name: 'Diego', lastname: 'Salvañá' });
   return responseItem;
};

const update = async (id: string, about: AboutMe) => {
   const responseItem = await AboutMeModel.findByIdAndUpdate(id, about, { new: true });
   return responseItem;
};

export { get, update };
