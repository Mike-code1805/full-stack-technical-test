import { NextFunction, Request, Response }  from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { deleteOneOfferseService } from '../services/deleteOneOfferseService';

export const deleteOfferseByIdController = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const offer = await deleteOneOfferseService(req.params.id);
        res.status(200).json({ message : "deleted" });
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error deleting the product'));
    }
};