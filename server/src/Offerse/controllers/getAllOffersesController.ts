import { NextFunction, Request, Response }  from 'express';
import { getAllOffersesService } from '../services/getAllOffersesService';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';


export const getAllOffersesController = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const offers = await getAllOffersesService();
        res.status(200).json(offers);
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error getting the offers'));
    }
};