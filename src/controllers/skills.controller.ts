import { Request, Response } from 'express';
import { handleHttpError } from '../utils/error.handle';
import * as skillsSvc from '../services/skills.service';

const getSkills = async (req: Request, res: Response) => {
   try {
      const responseItems = await skillsSvc.getAll();
      res.send(responseItems);
   } catch (err) {
      handleHttpError(res, 'ERROR_GET_SKILLS', err);
   }
};

const getSkill = async ({ params }: Request, res: Response) => {
   try {
      const { id } = params;
      const responseItem = await skillsSvc.getById(id);
      responseItem 
         ? res.send(responseItem) 
         : res.status(400).send('SKILL_NOT_FOUND');
   } catch (err) {
      handleHttpError(res, 'ERROR_GET_SKILL', err);
   }
};

const createSkill = async ({ body }: Request, res: Response) => {
   try {
      const responseItem = await skillsSvc.insert(body);
      res.status(201).send(responseItem);
   } catch (err: any) {
      err.code === 11000
         ? res.status(400).send('SKILL_ALREADY_EXISTS')
         : handleHttpError(res, 'ERROR_CREATE_SKILL', err);
   }
};

const updateSkill = async ({ params, body }: Request, res: Response) => {
   try {
      const { id } = params;
      const responseItem = await skillsSvc.update(id, body);
      responseItem 
         ? res.send(responseItem) 
         : res.status(400).send('SKILL_NOT_FOUND');
   } catch (err: any) {
      err.code === 11000
         ? res.status(400).send('SKILL_ALREADY_EXISTS')
         : handleHttpError(res, 'ERROR_UPDATE_SKILL', err);
   }
};

const deleteSkill = async ({ params }: Request, res: Response) => {
   try {
      const { id } = params;
      const responseItem = await skillsSvc.deleteById(id);
      responseItem ? res.send({ delete: 'ok' }) : res.status(400).send('SKILL_NOT_FOUND');
   } catch (err) {
      handleHttpError(res, 'ERROR_DELETE_SKILL', err);
   }
};

export { getSkills, getSkill, createSkill, updateSkill, deleteSkill };
