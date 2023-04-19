import { NextFunction, Response } from 'express';
import { RequestExt } from '../interfaces/RequestExt.interface';
import { verifyToken } from '../utils/jwt.handle';

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
   try {
      const tokenHeader = req.headers.authorization?.split(' ').pop();      
      
      const jwtPayload = verifyToken(`${tokenHeader}`);
      if (typeof jwtPayload !== 'string') {
         req.user = jwtPayload;
      }

      next();
   } catch (err) {
      console.log(err);
      res.status(400).send('INVALID_SESSION');
   }
};

export { checkJwt };
