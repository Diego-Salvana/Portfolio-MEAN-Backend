import { Router } from 'express';
import { createSkill, deleteSkill, getSkill, getSkills, updateSkill } from '../controllers/skills.controller';
import { checkJwt } from '../middlewares/session.middleware';
import { skillValidator } from '../middlewares/validationSkill.middleware';

const router = Router();

router.get('/', getSkills);
router.get('/:id', getSkill);
router.post('/', checkJwt, skillValidator, createSkill);
router.put('/:id', checkJwt, skillValidator, updateSkill);
router.delete('/:id', checkJwt, deleteSkill);

export default router ;

