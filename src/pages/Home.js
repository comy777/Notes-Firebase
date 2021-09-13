import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FabComponent from '../components/FabComponent';
import NoteComponent from '../components/NoteComponent';
import { NotesContext } from '../context/notes/notesContext';
import ModalComponent from '../components/ModalComponent';
import { UiContext } from '../context/ui/uiContext';
import ActivityIndicatorComponent from '../components/ActivityIndicatorComponent';

function Home() {
  const { getNotes, notes, activeNote, restoreActiveNote } =
    useContext(NotesContext);
  const { loading, setLoadingFalse } = useContext(UiContext);
  useEffect(() => {
    (async () => {
      await getNotes();
      setLoadingFalse();
    })();
    if (activeNote) restoreActiveNote();
  }, []);
  if (loading) return <ActivityIndicatorComponent />;
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        ListEmptyComponent={() => <Text>No hay notas aun</Text>}
        keyExtractor={(item, key) => key.toString()}
        numColumns={2}
        renderItem={({ item }) => <NoteComponent {...item} />}
      />
      <FabComponent />
      <ModalComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default Home;
