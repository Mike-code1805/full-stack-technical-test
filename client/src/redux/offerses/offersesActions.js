import * as offersesTypes from './offersesTypes';

export const createTask = (offerse) => {
  return {
    type: offersesTypes.CREATE_OFFERSE,
    payload: offerse
  }
};

export const deleteTask = (id) => {
  return {
    type: offersesTypes.DELETE_OFFERSE,
    payload: id
  }
};

export const editTask = (offerse) => {
  return {
    type: offersesTypes.EDIT_OFFERSE,
    payload: offerse
  }
}