import { Request, Response } from 'express';
import { loginUser } from '../services/auth.service';
import { generateToken } from '../utils/jwt.handle';
import { RequestExt } from '../interfaces/RequestExt.interface';

const loginCtrl = async ({ body }: Request, res: Response) => {
   try {
      const { email, password } = body;
      const isUser = await loginUser({ email, password });
      if (isUser === 'USER_NOT_FOUND' || isUser === 'INCORRECT_PASSWORD') {
         res.status(400).send(isUser);
      } else {
         res.send(isUser);
      }
   } catch (err) {
      console.log(err);
      res.status(500).send('SERVER_ERROR');
   }
};

const refreshToken = (req: RequestExt, res: Response) => {
   try {
      const user = req.user?.email;
      if (user) {
         const token = generateToken(user);
         const data = { token, user };
         res.send(data);
      } else {
         throw new Error('GENERATE_TOKEN_ERROR');
      }
   } catch (err) {
      console.log(err);
      res.status(401).send('UNAUTHORIZED');
   }
};

export { loginCtrl, refreshToken };
