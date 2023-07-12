import { Router } from 'express';
import aboutMe from './about-me';
import auth from './auth';
import projects from './projects';
import skills from './skills';
import studies from './studies';

const router = Router();

router.use('/about-me', aboutMe);
router.use('/auth', auth);
router.use('/projects', projects);
router.use('/skills', skills);
router.use('/studies', studies);

export default router;
