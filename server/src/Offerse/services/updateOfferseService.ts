import { logger } from "../../logger/appLoger";
import { offerseModel } from "../entity/model/offerseModel";
import { Offerse } from "../entity/types/Offerse";
import { updateOneResourceById } from "../../shared/factory/updateOneResourceById";

export const updateOfferseService = async (
    offerseId: string,
    offerse: Object
    ): Promise<Offerse | null | undefined > => {
    try {        
        const editedProduct = await updateOneResourceById(offerseModel)(
            offerseId,
            offerse
        );
        return editedProduct;
        
    } catch (error: any) {
        logger.error('error editing the offerse', {
            service: 'updateOfferseService',
            trace: error.message,
          });
        throw new Error('error editing the offerse');
    }
};