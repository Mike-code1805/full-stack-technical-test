import { offersesAPI } from "../../../axios/apiURL";

export const editOfferse = async (id, offer) => {  
    return await offersesAPI.put(`/api/offerses/${id}`, offer);
}