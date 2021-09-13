import React, { useReducer } from 'react';
import { getNotesFirestore } from '../../firebase/firestore';
import {
  dispatchGetNotes,
  dispatchRestoreActiveNote,
  dispatchSetActiveNote,
} from '../dispatchNotes/dispatchNotes';
import { notesReducer } from './notesReducer';
import { NotesContext } from './notesContext';

function NotesState(props) {
  const initialState = {
    notes: [],
    activeNote: null,
  };
  const [state, dispatch] = useReducer(notesReducer, initialState);
  const getNotes = async () => {
    await getNotesFirestore(snapshotNotes);
  };

  const snapshotNotes = snapshot => {
    const notes = snapshot.docs.map(note => {
      return {
        id: note.id,
        ...note.data(),
      };
    });
    dispatch(dispatchGetNotes(notes));
  };

  const setActiveNote = note => {
    dispatch(dispatchSetActiveNote(note));
  };

  const restoreActiveNote = () => dispatch(dispatchRestoreActiveNote());

  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        activeNote: state.activeNote,
        getNotes,
        setActiveNote,
        restoreActiveNote,
      }}>
      {props.children}
    </NotesContext.Provider>
  );
}

export default NotesState;
