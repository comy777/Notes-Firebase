import React from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

function ActivityIndicatorComponent() {
  return <ActivityIndicator size={48} style={styles.activity} />;
}

const styles = StyleSheet.create({
  activity: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
});

export default ActivityIndicatorComponent;
