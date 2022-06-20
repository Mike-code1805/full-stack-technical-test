import { Offerse } from "../entity/types/Offerse";
import { logger } from "../../logger/appLoger";
import { findAllResources } from "../../shared/factory/findAllResources";
import { offerseModel } from "../entity/model/offerseModel";

export const getAllOffersesService = async (): Promise<Offerse[]> => {
  try {
    const offers: Offerse[] = await findAllResources(offerseModel)();
    return offers;
  } catch (error: any) {
    logger.error('error getting the offers', {
      service: 'getAllOffersesService',
      trace: error.message,
    });
    throw new Error('error getting the offers');
  }
};
