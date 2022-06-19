import { ApplicationError } from '../../customErrors/ApplicationError';
import { Model as ModelType, ObjectId } from 'mongoose';

export const updateOneResourceById =
  <K>(Model: ModelType<K>) =>
  async (id?: string | ObjectId, update?: Object): Promise<K | null> => {
    try {       
      return await Model.findByIdAndUpdate({ _id: id,}, update);
    } catch (error: any) {
      throw new ApplicationError(401, error);
    }
    
};