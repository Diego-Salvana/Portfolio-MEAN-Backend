import { Router } from 'express';
import { getAbout, updateAbout } from '../controllers/about-me.controller';
import { aboutValidator } from '../middlewares/validationAbout.middleware';
import { checkJwt } from '../middlewares/session.middleware';

const router = Router();

router.get('/', getAbout);
router.put('/:id', checkJwt, aboutValidator, updateAbout);

export default router;
