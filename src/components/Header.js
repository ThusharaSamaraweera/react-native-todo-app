import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
  return(
    <View style={Styles.header}>
      <Text style={Styles.title}>My Todos</Text>
    </View>
  )
};

const Styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    paddingTop: 10,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});