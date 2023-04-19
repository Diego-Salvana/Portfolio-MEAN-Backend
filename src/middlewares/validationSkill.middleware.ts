import { body } from 'express-validator';
import { validatorResultExpress } from './validResultExpress.middleware';

const skillValidator = [
   body('name', 'El nombre es obligatorio').trim().notEmpty(),
   body('iconHTML', 'El ícono es obligatorio').trim().notEmpty(),
   body('color', 'El color es obligatorio').trim().notEmpty(),
   validatorResultExpress,
];

export { skillValidator };
