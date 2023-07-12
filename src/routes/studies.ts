import { Router } from 'express';
import { createStudy, deleteStudy, getStudies, getStudy, updateStudy } from '../controllers/studies.controller';
import { checkJwt } from '../middlewares/session.middleware';
import { studyValidator } from '../middlewares/validationStudy.middleware';

const router = Router();

router.get('/', getStudies);
router.get('/:id', getStudy);
router.post('/', checkJwt, studyValidator, createStudy);
router.put('/:id', checkJwt, studyValidator, updateStudy);
router.delete('/:id', checkJwt, deleteStudy);

export default router;
