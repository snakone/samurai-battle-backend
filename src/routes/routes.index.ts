import { Router } from 'express';
import MAIN_ROUTE from './main.route';

const ROUTER = Router();

ROUTER.use('/', [MAIN_ROUTE]);

export default ROUTER;