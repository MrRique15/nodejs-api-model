import sampleModel from "../models/sample.js";
import { Request, Response } from "express";
// ----------------------------------------------------------------
// Sample controller class
class Sample {
    constructor(){};
    
    get(req: Request, res: Response): void{
        let message = sampleModel.addDataToDB(req.body);
        res.send({ message: "GET route working... "+message });
    };

    post(req: Request, res: Response): void{
        let message = sampleModel.addDataToDB(req.body);
        res.send({ message: "POST route working... "+message });
    };
    
    put(req: Request, res: Response): void{
        let message = sampleModel.addDataToDB(req.body);
        res.send({ message: "PUT route working... "+message });
    };
    
    patch(req: Request, res: Response): void{
        let message = sampleModel.addDataToDB(req.body);
        res.send({ message: "PATCH route working... "+message });
    };
    
    del(req: Request, res: Response): void{
        let message = sampleModel.addDataToDB(req.body);
        res.send({ message: "DELETE route working... "+message });
    };
};
// ----------------------------------------------------------------
export default new Sample();