import express, { Router } from 'express';
import * as apiController from '../controllers/apiController';
import auth from '../middleWare/auth'

const router: Router = express.Router();
router.get('/data', auth, apiController.getData);
router.post('/data', apiController.createData);

export default router;
