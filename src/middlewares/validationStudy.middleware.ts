import { body } from 'express-validator';
import { validatorResultExpress } from './validResultExpress.middleware';

const studyValidator = [
   body('name', 'El nombre es obligatorio').trim().notEmpty(),
   body('institution', 'Institución es obligatoria').trim().notEmpty(),
   body('start', 'Formato año de inicio incorrecto').isNumeric().trim().isLength({ min: 4, max: 4 }),
   validatorResultExpress,
];

export { studyValidator };
