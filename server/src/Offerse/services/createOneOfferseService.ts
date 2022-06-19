import { createResource } from '../../shared/factory/createResource';
import { logger } from '../../logger/appLoger';
import { CreateOfferse, Offerse } from '../entity/types/Offerse';
import { offerseModel } from '../entity/model/offerseModel';


export const createOneOfferseService = async (
  offerRequest: CreateOfferse
): Promise<Offerse> => {
  try {
    const offer = await createResource(offerseModel)(offerRequest);
    return offer as Offerse;
  } catch (error: any) {
    logger.error('error creating a offerse', {
      service: 'createOneOfferseService',
      trace: error.message,
    });
    throw new Error('error creating a offerse');
  }
};