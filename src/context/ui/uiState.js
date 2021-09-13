import React, { useReducer } from 'react';
import { UiContext } from './uiContext';
import { uiReducer } from './uiReducer';
import { types } from '../../types/types';

function UiState(props) {
  const initialState = {
    modal: false,
    loading: true,
    themeDarkApp: false,
  };
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const showModal = () => {
    dispatch({
      type: types.SHOW_MODAL,
    });
  };

  const hideModal = () => {
    dispatch({
      type: types.HIDE_MODAL,
    });
  };

  const setLoadingFalse = () => {
    dispatch({
      type: types.SET_LOADING,
    });
  };

  const setLoadingTrue = () => {
    dispatch({
      type: types.RESTORE_LOADING,
    });
  };

  const setDarkTheme = () => {
    dispatch({
      type: types.SET_DARK_THEME,
    });
  };

  const setLightTheme = () => {
    dispatch({
      type: types.SET_LIGHT_THEME,
    });
  };

  return (
    <UiContext.Provider
      value={{
        modal: state.modal,
        loading: state.loading,
        themeDarkApp: state.themeDarkApp,
        showModal,
        hideModal,
        setLoadingFalse,
        setLoadingTrue,
        setLightTheme,
        setDarkTheme,
      }}>
      {props.children}
    </UiContext.Provider>
  );
}

export default UiState;
