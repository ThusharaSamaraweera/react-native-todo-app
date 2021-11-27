import React from "react";
import {StyleSheet, View,  Text} from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

const TodoItem = ({item, pressHandler, onRequestToUpdate}) => {

  return (
    <View style={styles.item}>
      <View style={styles.deleteIcon}>
        <MaterialIcons  name='delete' size={22} color='#333' 
          onPress={() => pressHandler(item.key)}
        />
      </View>
      <Text style={styles.text}>{item.text}</Text>
      <View style={styles.editIcon}>
        <Feather name="edit" size={22} color="black" 
          onPress={ () => onRequestToUpdate(item.key)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#f4c1ab',
  },
  text: {
    fontSize: 15,
    marginRight: 80,
  },
  deleteIcon: {
    marginHorizontal: 5,    
  },
  editIcon: {
    marginTop: 16,
    position: 'absolute',
    left: 320,
  }
})

export default TodoItem;