import { Response } from 'express';

const handleHttpError = (res: Response, error: string, errorRaw?: any) => {
   console.log('Controller error', errorRaw);
   res.status(500).send(error);
};

export { handleHttpError };
