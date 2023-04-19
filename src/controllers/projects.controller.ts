import { Request, Response } from 'express';
import { handleHttpError } from '../utils/error.handle';
import * as projectsSvc from '../services/projects.service';


const getProjects = async (req: Request, res: Response) => {
   try {
      const responseItems = await projectsSvc.getAll();
      res.send(responseItems);
   } catch (err) {
      handleHttpError(res, 'ERROR_GET_PROJECTS', err);
   }
};

const getProject = async ({ params }: Request, res: Response) => {
   try {
      const { id } = params;
      const responseItem = await projectsSvc.getById(id);
      responseItem 
         ? res.send(responseItem) 
         : res.status(400).send('PROJECT_NOT_FOUND');
   } catch (err) {
      handleHttpError(res, 'ERROR_GET_PROJECT', err);
   }
};

const createProject = async ({ body }: Request, res: Response) => {
   try {
      const responseItem = await projectsSvc.insert(body);
      res.status(201).send(responseItem);
   } catch (err) {
      handleHttpError(res, 'ERROR_CREATE_PROJECT', err);
   }
};

const updateProject = async ({ params, body }: Request, res: Response) => {
   try {
      const { id } = params;
      const responseItem = await projectsSvc.update(id, body);
      responseItem 
         ? res.send(responseItem) 
         : res.status(400).send('PROJECT_NOT_FOUND');
   } catch (err) {
      handleHttpError(res, 'ERROR_UPDATE_PROJECT', err);
   }
};

const deleteProject = async ({ params }: Request, res: Response) => {
   try {
      const { id } = params;
      const responseItem = await projectsSvc.deleteById(id);
      responseItem 
         ? res.send({ delete: 'ok' })
         : res.status(400).send('PROJECT_NOT_FOUND');
   } catch (err) {
      handleHttpError(res, 'ERROR_DELETE_PROJECT', err);
   }
};

export { getProject, getProjects, createProject, updateProject, deleteProject };
