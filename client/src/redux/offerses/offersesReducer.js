import * as offersesTypes from './offersesTypes';

const initialState = {
  offerses: []
}

export const offersesReducer = (state = initialState, action) => {
  switch (action.type) {
    case offersesTypes.CREATE_OFFERSE:
      const offerse = [action.payload, ...state.offerses  ]
      return { ...state, offerses:offerse }
    case offersesTypes.DELETE_OFFERSE:
      const deletedOfferses = state.offerses.filter(offerse => offerse.id !== action.payload)
      return { ...state, offerses: deletedOfferses }
    case offersesTypes.EDIT_OFFERSE:
      const editedOfferses = state.tasks.map(offerse => {
        return offerse.id === action.payload.id ? action.payload : offerse
      })
      return { ...state, offerses: editedOfferses }
    case offersesTypes.GET_ALL_OFFERSES:
      return { ...state, offerses: action.payload }
    default:
      return state
  }
};
