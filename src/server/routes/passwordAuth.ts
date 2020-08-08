import { Request, Response, Router } from 'express';
import { passwordCheck } from './../services/password-service';

export default (
): Router => {
    const router = Router();


    router.post('/check', async (req: Request, res: Response) => {
        //console.log(req.body.executionName)
        if (!req.body.password){
            return res.status(400).json({message:"input is missing"})
        }

        if (passwordCheck(req.body.password)) {
            return res.sendStatus(200);
        }
        return res.sendStatus(400);
       
    });
    return router;
}
