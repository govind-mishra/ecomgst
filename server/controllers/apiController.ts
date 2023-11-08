import { Request, Response } from 'express';
const fileUpload = `<form action="/api/upload" method="post" enctype="multipart/form-data">
                     <input type="file" name="file" />
                     <button type="submit">Submit</button>
                    </form>`;
export const getData = (req: Request, res: Response): void => {
    res.send(fileUpload);
};

export const createData = (req: Request, res: Response): void => {
    console.log(req);
    res.json({ message: 'Data created successfully' });
};
