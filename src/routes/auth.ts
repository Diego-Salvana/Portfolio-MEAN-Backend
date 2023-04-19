import { Router } from 'express';
import { loginCtrl, refreshToken } from '../controllers/auth.controller';
import { loginValidator } from '../middlewares/validationAuth.middleware';
import { checkJwt } from '../middlewares/session.middleware';

const router = Router();

router.post('/login', loginValidator, loginCtrl);
router.get('/refresh', checkJwt, refreshToken);

export { router };
