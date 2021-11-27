import React from "react";
import {StyleSheet, View,  Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({item, pressHandler}) => {

  return (
    <View style={styles.item}>
      <View style={styles.deleteIcon}>
        <MaterialIcons  name='delete' size={22} color='#333' 
          onPress={() => pressHandler(item.key)}
        />
      </View>
      <Text style={styles.text}>{item.text}</Text>
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
  deleteIcon: {
    marginHorizontal: 5,    
  },
})

export default TodoItem;