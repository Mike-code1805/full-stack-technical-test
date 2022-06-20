import { offersesAPI } from "../../../axios/apiURL";

export const getAllOfferses = async () => {
  const { data } = await offersesAPI.get('/api/offerses');
  return data
}