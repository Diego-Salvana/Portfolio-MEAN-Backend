import { Request, Response } from 'express';
import * as aboutSvc from '../services/about-me.service';
import { handleHttpError } from '../utils/error.handle';

const getAbout = async (req: Request, res: Response) => {
   try {
      const responseItem = await aboutSvc.get();
      responseItem 
         ? res.send(responseItem) 
         : res.status(400).send('ITEM_NOT_FOUND');
   } catch (err) {
      handleHttpError(res, 'ERROR_GET_ABOUT', err);
   }
};

const updateAbout = async ({ params, body }: Request, res: Response) => {
   try {
      const { id } = params;
      const responseItem = await aboutSvc.update(id, body);
      responseItem 
         ? res.send(responseItem)
         : res.status(400).send('ITEM_NOT_FOUND');
   } catch (err) {
      handleHttpError(res, 'ERROR_UPDATE_ABOUT', err);
   }
};

export { getAbout, updateAbout };
