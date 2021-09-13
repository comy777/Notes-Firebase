import { types } from '../../types/types';

export const notesReducer = (state, action) => {
  switch (action.type) {
    case types.GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case types.ACTIVE_NOTE:
      return {
        ...state,
        activeNote: action.payload,
      };
    case types.RESTORE_ACTIVE_NOTE:
      return {
        ...state,
        activeNote: null,
      };
    default:
      return state;
  }
};
