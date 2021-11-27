import React from "react";
import {StyleSheet, View, TextInput, Button} from 'react-native';

const AddTodo = ({submitHandler, inputText, setInputText, requestToUpdate}) => {

  const changeHandler = (val) => {
    setInputText(val)
  }

  return(
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={inputText}
      />
      <Button onPress={ () => { submitHandler(inputText);
                      } 
              } 
              title={requestToUpdate ? 'Update' : 'Add todo'}
              color='coral'
              styles={styles.btn}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 6,
    borderColor: '#aaa',
    borderBottomColor: '#ddd',
  },
  btn: {
    fontWeight: 'bold',
  }
})

export default AddTodo;