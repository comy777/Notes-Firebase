import React, { useContext } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { UiContext } from '../context/ui/uiContext';
import { NotesContext } from '../context/notes/notesContext';

const { width } = Dimensions.get('window');

function NoteComponent({ id, title, body }) {
  const { showModal } = useContext(UiContext);
  const { setActiveNote } = useContext(NotesContext);
  const _showModal = () => {
    setActiveNote({ id, title, body });
    showModal();
  };
  return (
    <Card style={styles.card} onPress={_showModal}>
      <Card.Title title={title} />
      <Card.Content>
        <Paragraph>{body}</Paragraph>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: width / 2,
    marginBottom: 15,
    marginHorizontal: 5,
  },
});

export default NoteComponent;
