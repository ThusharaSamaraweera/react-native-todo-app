import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Header from "../components/Header";

const TodoApp = () => {

  return (
    <View style={styles.container}>
      <Header/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default TodoApp;
