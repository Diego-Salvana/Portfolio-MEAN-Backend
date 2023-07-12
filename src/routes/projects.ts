import { Router } from 'express';
import { createProject, deleteProject, getProject, getProjects, updateProject } from '../controllers/projects.controller';
import { checkJwt } from '../middlewares/session.middleware';
import { projectValidator } from '../middlewares/validationProject.middleware';

const router = Router();

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', checkJwt, projectValidator, createProject);
router.put('/:id', checkJwt, projectValidator, updateProject);
router.delete('/:id', checkJwt, deleteProject);

export default router ;