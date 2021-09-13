import React, { useContext, useState } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { Drawer, Text, Switch } from 'react-native-paper';
import { UiContext } from '../context/ui/uiContext';

function DrawerContent(props) {
  const { navigation } = props;
  const { setDarkTheme, setLightTheme } = useContext(UiContext);
  const [theme, setTheme] = useState(false);
  const setThemeApp = () => {
    setTheme(!theme);
    theme ? setLightTheme() : setDarkTheme();
  };
  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          label="Home"
          active
          onPress={() => navigation.navigate('home')}
        />
      </Drawer.Section>
      <Drawer.Section>
        <Drawer.Item label="Configuracion" />
        <View style={styles.theme}>
          <Text>Tema</Text>
          <Switch value={theme} onValueChange={setThemeApp} />
        </View>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  theme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default DrawerContent;
