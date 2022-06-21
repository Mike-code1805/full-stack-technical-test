import { offersesAPI } from "../../../axios/apiURL";

export const saveOfferse = async (offerses) => {  
    return await offersesAPI.post('/api/offerses', offerses);
}