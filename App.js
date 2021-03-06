import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/Screens/MainScreen';
import { TodoScreen } from './src/Screens/TodoScreen'

export default function App() {
  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(null)

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }

  const removeTodo = id => {
    const todo = todos.find(todo => todo.id === id)
    Alert.alert(
      "Delete note",
      `Are you sure you want to delete ${todo.title}?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          setTodoId(null)
          setTodos(prev => prev.filter(todo => todo.id !== id)) 
        }}
      ]
    );
  }

  const updateTodo = (id, title) => {
    setTodos(old =>  
     old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content =  <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen onRemove={removeTodo} goBack={() => setTodoId(null)} todo={selectedTodo} onSave={updateTodo} />
  }

  return (
    <ScrollView>
      <Navbar title="ToDo-app" />
      <View style={styles.container}> 
        {content}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
