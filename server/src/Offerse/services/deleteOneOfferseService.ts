// import { offerseModel } from "../entity/model/offerseModel";
import { offerseModel } from "../entity/model/offerseModel";
import { deleteOneResourceById } from "../../shared/factory/deleteOneResourceById";


export const deleteOneOfferseService = async (id: string): Promise<{ deletedCount: number } | null> => {
  try {
    if (!id) throw new Error(`No product id provided`);
    return await deleteOneResourceById(offerseModel)(id);
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};
