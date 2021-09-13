import React, { useContext } from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import Note from '../pages/Note';
import DrawerContent from './DrawerContent';
import { UiContext } from '../context/ui/uiContext';
import { themeLight } from '../theme/theme';

const Drawer = createDrawerNavigator();

function AppRoutes() {
  const { themeDarkApp } = useContext(UiContext);
  return (
    <PaperProvider theme={themeDarkApp ? themeLight : DefaultTheme.dark}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen
            name="home"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Drawer.Screen
            name="create note"
            component={Note}
            options={{ title: 'Create Note' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default AppRoutes;
