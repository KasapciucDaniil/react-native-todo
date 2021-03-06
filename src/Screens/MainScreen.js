import React from 'react'
import { View, StyleSheet, FlatList, Text, Image } from "react-native"
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  let content = (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={todos}
      renderItem={({item}) => <Todo todo={item} onOpen={openTodo} onRemove={removeTodo} />} 
    />
  )
 
  if (todos.length === 0) {
    content = 
    <View style={styles.imgWrap}>
      <Image style={styles.image} source={require('../../assets/no-items.png')} />
    </View>
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
       {content} 
    </View>
  )
}

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
    marginTop: 10
  } ,
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})