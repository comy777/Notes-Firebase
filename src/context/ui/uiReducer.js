import { types } from '../../types/types';

export const uiReducer = (state, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        modal: true,
      };
    case types.HIDE_MODAL:
      return {
        ...state,
        modal: false,
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case types.RESTORE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.SET_DARK_THEME:
      return {
        ...state,
        themeDarkApp: true,
      };
    case types.SET_LIGHT_THEME:
      return {
        ...state,
        themeDarkApp: false,
      };
    default:
      return state;
  }
};
