import { NextFunction, Request, Response }  from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';
import { createOneOfferseService } from '../services/createOneOfferseService';

export const createOfferseController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, characteristics } = req.body;
        const offer = await createOneOfferseService({name, characteristics});
        res.status(200).json({offer});

    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error creating the offer'));
    }
}