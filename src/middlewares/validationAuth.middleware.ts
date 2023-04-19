import { body } from 'express-validator';
import { validatorResultExpress } from './validResultExpress.middleware';

const loginValidator = [
   body('email', 'Formato de email incorrecto').trim().isEmail().normalizeEmail(),
   body('password', 'Formato de contraseña incorrecto').trim().isLength({ min: 6 }),
   validatorResultExpress,
];

export { loginValidator };
