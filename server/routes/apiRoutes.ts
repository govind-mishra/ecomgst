import express, { Router } from 'express';
import * as apiController from '../controllers/apiController';
import auth from '../middleWare/auth'
import { handleFileUpload } from '../controllers/fileController'

const router: Router = express.Router();
router.get('/data', auth, apiController.getData);
router.post('/data', apiController.createData);
router.post('/upload', (req, res, next) => {
    handleFileUpload(req, res, (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ error: err.message });
        }
        // File upload successful, additional processing if needed
        return res.status(200).json({ message: 'File uploaded successfully' });
    });
});

export default router;
