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
  const [requestToUpdate, setRequestToUpdate] = useState(false);
  const [keyOfUpdate, setkeyOfUpdate] = useState(null);

  const pressHandler = (key) => {
    Alert.alert(
      "warning",
      "want to delete this todo?",
      [
        {
          text: "Ok",
          onPress: () => {  setTodos( (preTodos) => {
                              return preTodos.filter(todo => todo.key != key)
                            })}
        },
        {
          text: "Cancel",
          onPress: () => {return}
        }
      ]
    )
  }

  const handleOnRequestToUpdate = (key) => {
    setRequestToUpdate(true);
    setkeyOfUpdate(key);
    setInputText(todos.find( todo => todo.key === key).text);
  }


  const submitHandler = (text) => {
    if(text.length<= 3){
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPres: () => {return}}
      ])
      return
    };

    if(requestToUpdate){
      const allTodos = todos.slice();
      if(!keyOfUpdate){
      return;
      }
      const index = todos.findIndex( (todo) => todo.key === keyOfUpdate);
      allTodos.splice(index, 1, {key: keyOfUpdate, text: text});
      setTodos(allTodos);
      setkeyOfUpdate(null);
      setRequestToUpdate(null);
      return;
    }

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
                  onRequestToUpdate={handleOnRequestToUpdate}
                  requestToUpdate={requestToUpdate}
        />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} 
                        pressHandler={pressHandler}
                        onRequestToUpdate={handleOnRequestToUpdate}  
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
