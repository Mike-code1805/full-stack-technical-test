import * as offersesTypes from './offersesTypes';

const initialState = {
  tasks: []
}
/**
 * 
 * @param {object} state 
 * @param {object} action 
 * @returns 
 */
export const offersesReducer = (state = initialState, action) => {
  switch (action.type) {
    case offersesTypes.CREATE_OFFERSE:
      const tasks = [action.payload, ...state.tasks]
      return { ...state, tasks }
    case offersesTypes.DELETE_OFFERSE:
      const deletedTasks = state.tasks.filter(task => task.id !== action.payload)
      return { ...state, tasks: deletedTasks }

    case offersesTypes.EDIT_OFFERSE:
      const editedTasks = state.tasks.map(task => {
        return task.id === action.payload.id ? action.payload : task
      })
      return { ...state, tasks: editedTasks }
    default:
      return state
  }
}