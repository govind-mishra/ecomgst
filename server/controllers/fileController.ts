import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, cb: Function) {
        console.log(req);
        cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: function (req: Request, file: Express.Multer.File, cb: Function) {
        console.log(req);
        cb(null, file.originalname); // Use the original file name
    }
});

const upload = multer({ storage: storage });

export const handleFileUpload = upload.single('file'); 