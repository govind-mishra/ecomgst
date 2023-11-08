import { Request, Response, NextFunction } from 'express';

declare module "express-serve-static-core" {
    interface Request {
        user?: string;
    }
}

const auth = (req: Request, res: Response, next: NextFunction): void => {
    req.headers.aaa = 'www';
    req.user = "test";
    console.log('auth1 middleware executed. req.user:', req.user);
    next();
};

export default auth;

