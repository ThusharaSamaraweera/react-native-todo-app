import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoApp from './src/view/TodoApp';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoApp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});