import { Request, Response, NextFunction } from 'express';

const auth = (req: Request, res: Response, next: NextFunction): void => {
    req.user = "test";
    console.log('auth1 middleware executed. req.user:', req.user);
    next();
};

export default auth;

