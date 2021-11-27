import React, {useState} from "react";
import {View, StyleSheet, FlatList, Alert} from "react-native";
import AddTodo from "../components/AddTodo";
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

  const [inputText, setInputText] = useState('');

  const pressHandler = (key) => {
    setTodos( (preTodos) => {
      return preTodos.filter(todo => todo.key != key)
    })
  }


  const submitHandler = (text) => {
    if(text.length<= 3){
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPres: () => {return}}
      ])
      return
    };

    setTodos( (preTodos) => {
      return [
        {text: text, key: todos.length + 1},
        ...preTodos
      ]
    })
  };

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo  inputText={inputText}
                  setInputText={setInputText}
                  submitHandler={submitHandler}
        />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} 
                        pressHandler={pressHandler}
              />
            )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 40,
    height: 'auto',
    marginHorizontal: 20,
  },
  list : {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
  }
});

export default TodoApp;
