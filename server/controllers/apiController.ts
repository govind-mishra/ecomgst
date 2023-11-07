import { Request, Response } from 'express';

export const getData = (req: Request, res: Response): void => {
    res.send('This is a basic Example for Express.js with user' + req.user);
};

export const createData = (req: Request, res: Response): void => {
    res.json({ message: 'Data created successfully' });
};
