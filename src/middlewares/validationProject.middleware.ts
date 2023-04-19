import { body } from 'express-validator';
import { validatorResultExpress } from './validResultExpress.middleware';

const projectValidator = [
   body('name', 'El nombre es obligatorio').trim().notEmpty(),
   body('description', 'La descripción es obligatoria').trim().notEmpty(),
   body('linkGitHub', 'El link a Git-Hub es obligatorio').trim().notEmpty(),
   validatorResultExpress,
];

export { projectValidator };
