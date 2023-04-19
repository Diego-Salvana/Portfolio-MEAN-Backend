import { Request, Response } from 'express';
import * as studiesSvc from '../services/studies.service';
import { handleHttpError } from '../utils/error.handle';

const getStudies = async (req: Request, res: Response) => {
   try {
      const responseItems = await studiesSvc.getAll();
      res.send(responseItems);
   } catch (err) {
      handleHttpError(res, 'ERROR_GET_STUDIES', err);
   }
};

const getStudy = async ({ params }: Request, res: Response) => {
   try {
      const { id } = params;
      const responseItem = await studiesSvc.getById(id);
      responseItem 
         ? res.send(responseItem) 
         : res.status(400).send('STUDY_NOT_FOUND');
   } catch (err) {
      handleHttpError(res, 'ERROR_GET_STUDY', err);
   }
};

const createStudy = async ({ body }: Request, res: Response) => {
   try {
      const responseItem = await studiesSvc.insert(body);
      res.status(201).send(responseItem);
   } catch (err) {
      handleHttpError(res, 'ERROR_CREATE_STUDY', err);
   }
};

const updateStudy = async ({ params, body }: Request, res: Response) => {
   try {
      const { id } = params;
      const responseItem = await studiesSvc.update(id, body);
      responseItem 
         ? res.send(responseItem) 
         : res.status(400).send('STUDY_NOT_FOUND');
   } catch (err) {
      handleHttpError(res, 'ERROR_UPDATE_STUDY', err);
   }
};

const deleteStudy = async ({ params }: Request, res: Response) => {
   try {
      const { id } = params;
      const responseItem = await studiesSvc.deleteById(id);
      responseItem 
         ? res.send({ delete: 'ok' })
         : res.status(400).send('STUDY_NOT_FOUND');
   } catch (err) {
      handleHttpError(res, 'ERROR_DELETE_STUDY', err);
   }
};

export { getStudies, getStudy, createStudy, updateStudy, deleteStudy };
