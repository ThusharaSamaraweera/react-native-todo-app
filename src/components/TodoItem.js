import React from "react";
import {StyleSheet, View,  Text, TouchableOpacity} from 'react-native';

const TodoItem = ({item}) => {

  return (
    <View style={styles.item}>
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
})

export default TodoItem;