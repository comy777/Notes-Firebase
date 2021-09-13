import React from 'react';
import NotesState from './src/context/notes/notesState';
import UiState from './src/context/ui/uiState';
import AppRoutes from './src/routes/AppRoutes';

function App() {
  return (
    <UiState>
      <NotesState>
        <AppRoutes />
      </NotesState>
    </UiState>
  );
}

export default App;
