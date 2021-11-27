import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState(
    [
      {text: 'buy coffee', key: 1},
      {text: "create an web app", key: 2},
      {text: "play", key: 3},
      {text: 'buy coffee', key: 4},
    ]
  );
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item}) => (
                  <TodoItem item={item}/>
                )}
              />
        </View>
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
