import { deleteOfferse } from '../../components/offerse/services/deleteOfferse';
import { editOfferse } from '../../components/offerse/services/editOfferse';
import { getAllOfferses } from '../../components/offerse/services/getAllOfferses';
import { saveOfferse } from '../../components/offerse/services/saveOfferse';
import * as offersesTypes from './offersesTypes';

export const createOffer = (offerses) => {
  return async (dispatch) => {
    await saveOfferse(offerses);
    dispatch({
      type: offersesTypes.CREATE_OFFERSE,
      payload: offerses
     });
  }
};

export const deleteOffer = (id) => {
  return async (dispatch) => {
    await deleteOfferse(id);
    dispatch({
      type: offersesTypes.DELETE_OFFERSE,
      payload: id
     });
  }
};

export const editOffer = (offerse) => {
  return async (dispatch) => {
    await editOfferse(offerse._id, offerse);
    dispatch({
      type: offersesTypes.EDIT_OFFERSE,
      payload: offerse
     });
  }
}

export const initOfferses = () => {
  return async (dispatch) => {
    const offerses = await getAllOfferses();
    dispatch({
      type: offersesTypes.GET_ALL_OFFERSES,
      payload: offerses
    })
  }
}