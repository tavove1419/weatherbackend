import {Router} from 'express';
import * as auth from '../auth/auth.controller';

const router = Router();

router.route('/api/auth/login').post(auth.login);

export default router;