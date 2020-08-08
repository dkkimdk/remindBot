import { Request, Response, Router } from 'express';
import {getExecutions, startExecution} from '../services/aws-service'


export default (
    message:string
): Router => {
    const router = Router();
    console.log(message);

    router.get('/all', async (req: Request, res: Response) => {
        console.log(req);
        const executions = await getExecutions('us-east-1','arn:aws:states:us-east-1:441927962368:stateMachine:sampleMessenger-1')
        /*if (!executions) {
            return res.status(400).json({message: 'Error'})
        } else{
            return res.status(200).json({message: executions});
        }*/
        if (executions.statusCode === 400) {
            return res.status(400).json({message:executions});
        } else {
            return res.status(200).json({message:executions});
        }
    });

    router.post('/start', async (req: Request, res: Response) => {
        console.log(req.body)
        //console.log(req.body.executionName)
        if (!req.body.input.message || !req.body.input.phoneNumber || !req.body.time ){
            return res.status(400).json({message:"input is missing"})
        }

        const executions = await startExecution('us-east-1','arn:aws:states:us-east-1:441927962368:stateMachine:sampleMessenger-1', req.body.input,req.body.time)
        if (executions.statusCode === 400) {
            return res.status(400).json({message:executions});
        } else {
            return res.status(200).json({message:executions});
        }
    });
    return router;
}
