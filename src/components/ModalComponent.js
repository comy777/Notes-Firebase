import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton, Portal, Modal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { UiContext } from '../context/ui/uiContext';
import { NotesContext } from '../context/notes/notesContext';
import { deleteNoteFirestore } from '../firebase/firestore';
import ActivityIndicatorComponent from './ActivityIndicatorComponent';

function ModalComponent() {
  const navigation = useNavigation();
  const { modal, hideModal, loading, setLoadingTrue, setLoadingFalse } =
    useContext(UiContext);
  const { activeNote, restoreActiveNote } = useContext(NotesContext);
  const _hideModal = () => {
    hideModal();
    restoreActiveNote();
  };
  const _editNote = () => {
    hideModal();
    navigation.navigate('create note');
  };
  const _deleteNote = async () => {
    setLoadingTrue();
    await deleteNoteFirestore(activeNote.id);
    setLoadingFalse();
    restoreActiveNote();
    hideModal();
  };
  if (loading) return <ActivityIndicatorComponent />;
  return (
    <Portal>
      <Modal
        contentContainerStyle={styles.modal}
        visible={modal}
        onDismiss={_hideModal}>
        {activeNote && (
          <View style={styles.container}>
            <View style={styles.containerText}>
              <Text style={styles.title}>{activeNote.title}</Text>
              <Text style={styles.body}>{activeNote.body}</Text>
            </View>
            <View style={styles.containerIcons}>
              <IconButton
                icon="delete"
                size={24}
                color="teal"
                onPress={_deleteNote}
              />
              <IconButton
                icon="plus"
                size={24}
                color="teal"
                onPress={_editNote}
              />
            </View>
          </View>
        )}
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: '90%',
    width: '90%',
    marginHorizontal: 15,
    marginVertical: 25,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
  containerText: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 17,
    marginTop: 5,
  },
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default ModalComponent;
