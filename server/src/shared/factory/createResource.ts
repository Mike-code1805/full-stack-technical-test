import { ApplicationError } from '../../customErrors/ApplicationError';

import { Model as ModelType } from 'mongoose';
import { Offerse } from '../../Offerse/entity/types/Offerse';

export const createResource =
  <
    K extends
      | ModelType<Offerse>
  >(
    Model: K
  ) =>
  async <T>(resource: T): Promise< Offerse > => {
    try {
        const newResource = new Model(resource);
        return await newResource.save();
      } catch (error: any) {
        throw new ApplicationError(400, error.message);
      }
  };