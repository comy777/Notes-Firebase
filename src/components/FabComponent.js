import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NotesContext } from '../context/notes/notesContext';

function FabComponent() {
  const navigation = useNavigation();
  const { restoreActiveNote, activeNote } = useContext(NotesContext);
  const handleSubmit = () => {
    if (activeNote) restoreActiveNote();
    navigation.navigate('create note');
  };
  return (
    <FAB
      small
      color="teal"
      style={styles.fab}
      icon="plus"
      onPress={handleSubmit}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 15,
  },
});

export default FabComponent;
