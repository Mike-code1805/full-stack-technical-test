import { NextFunction, Request, Response }  from 'express';
import { updateOfferseService } from '../services/updateOfferseService';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const updateOfferseController = async (req:Request, res:Response,  next: NextFunction) => {
    try{
        const offers = await updateOfferseService(req.params.id, req.body);
        res.status(200).json({ message : "updated" });
    } catch (error: any) {
        next(new ApplicationError(400, 'error updating the offers'));
    }
};
  