import { types } from '../../types/types';

export const dispatchSetActiveNote = note => ({
  type: types.ACTIVE_NOTE,
  payload: note,
});

export const dispatchRestoreActiveNote = () => ({
  type: types.RESTORE_ACTIVE_NOTE,
});

export const dispatchGetNotes = notes => ({
  type: types.GET_NOTES,
  payload: notes,
});
