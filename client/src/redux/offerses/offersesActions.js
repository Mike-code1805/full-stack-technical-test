import { getAllOfferses } from '../../components/offerse/services/getAllOfferses';
import * as offersesTypes from './offersesTypes';

export const createOffer = (offerse) => {
  return {
    type: offersesTypes.CREATE_OFFERSE,
    payload: offerse
  }
};

export const deleteOffer = (id) => {
  return {
    type: offersesTypes.DELETE_OFFERSE,
    payload: id
  }
};

export const editOffer = (offerse) => {
  return {
    type: offersesTypes.EDIT_OFFERSE,
    payload: offerse
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