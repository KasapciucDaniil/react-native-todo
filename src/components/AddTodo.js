import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons'
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')  
      Keyboard.dismiss()
    } else {
      Alert.alert('Заполните поле текста!')
    }

  }

  return (
    <View style={styles.block}>
      <TextInput 
        onChangeText={setValue}
        value={value}
        style={styles.input} 
        placeholder="Введите название заметки..."
        autoCorrect={false}
        autoCapitalize="none"
      />
      <AntDesign.Button onPress={pressHandler} name="pluscircleo" >
        Add note
      </AntDesign.Button>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '63%',
    padding: 7,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 3
  },
})