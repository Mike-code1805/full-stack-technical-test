import { combineReducers } from "redux";
import { offersesReducer } from "./offerses/offersesReducer";

export const rootReducer = combineReducers({
  offerse: offersesReducer,
})