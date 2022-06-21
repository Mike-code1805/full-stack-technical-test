import { offersesAPI } from "../../../axios/apiURL";

export const deleteOfferse = async (id) => {  
    return await offersesAPI.delete(`/api/offerses/${id}`);
}