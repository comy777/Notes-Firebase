import { firebaseDb } from './firebase';

export const saveNoteFirestore = async note => {
  try {
    await firebaseDb.collection('notes').add(note);
  } catch (error) {
    console.log(error);
  }
};

export const getNotesFirestore = async snapshotNotes => {
  try {
    return await firebaseDb.collection('notes').onSnapshot(snapshotNotes);
  } catch (error) {
    console.log(error);
  }
};

export const editNoteFirestore = async (id, note) => {
  try {
    const { title, body } = note;
    await firebaseDb.collection('notes').doc(id).update({
      title,
      body,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNoteFirestore = async id => {
  try {
    await firebaseDb.collection('notes').doc(id).delete();
  } catch (error) {
    console.log(error);
  }
};
