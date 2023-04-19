import { body } from 'express-validator';
import { validatorResultExpress } from './validResultExpress.middleware';

const aboutValidator = [
   body('aboutMeText', 'La descripción es obligatoria').trim().notEmpty(),
   validatorResultExpress,
];

export { aboutValidator };
