import React, { useContext, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import useForm from '../hooks/useForm';
import { saveNoteFirestore, editNoteFirestore } from '../firebase/firestore';
import { NotesContext } from '../context/notes/notesContext';
import { UiContext } from '../context/ui/uiContext';
import ActivityIndicatorComponent from '../components/ActivityIndicatorComponent';

function Note({ navigation }) {
  const { activeNote, restoreActiveNote } = useContext(NotesContext);
  const { loading, setLoadingTrue, setLoadingFalse } = useContext(UiContext);
  const note = { title: '', body: '' };
  let initialState = activeNote ? activeNote : note;
  useEffect(() => {
    reset();
  }, [activeNote, reset]);
  const [formValues, handleInputChange, reset] = useForm(initialState);
  const { title, body } = formValues;
  const handleSubmit = async () => {
    if (!title && !body) {
      navigation.navigate('home');
      return;
    }
    setLoadingTrue();
    if (activeNote) {
      await editNoteFirestore(activeNote.id, formValues);
      restoreActiveNote();
    } else {
      await saveNoteFirestore(formValues);
      reset();
    }
    setLoadingFalse();
    navigation.navigate('home');
  };
  if (loading) return <ActivityIndicatorComponent />;
  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          label="Title"
          value={title}
          onChangeText={value => handleInputChange('title', value)}
          style={styles.input}
        />
        <TextInput
          label=""
          multiline
          value={body}
          onChangeText={value => handleInputChange('body', value)}
          style={styles.input}
        />
      </ScrollView>
      <IconButton
        style={styles.icon}
        icon="check"
        color="teal"
        onPress={handleSubmit}
        size={32}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  input: {
    marginBottom: 15,
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 15,
  },
});

export default Note;
