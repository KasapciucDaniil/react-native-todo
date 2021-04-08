import React, {useState} from 'react'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { View, StyleSheet, Button, Modal, TextInput, Alert } from 'react-native'
import { AppButton } from '../components/ui/AppButton'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Ошибка!', `Минимальная длина 3 символа. Сейчас ${title.trim().length} символов!`
      )
    } else {
      onSave(title)
    }
  }

  return (
    <Modal animationType="fade" transparent={false} visible={visible}>
      <View style={styles.wrap}>
        <TextInput 
          value={title}
          onChangeText={setTitle}
          style={styles.input} 
          autoCapitalize="none" 
          placeholder="Enter new title..." 
          maxLength={20}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
           <AppButton 
             color="red" 
             title="Cancel" 
             onPress={onCancel} 
            >
              <AntDesign name="back" size={20} />
            </AppButton> 
          </View>

          <View style={styles.button}>
           <AppButton 
             color="green" 
             onPress={saveHandler} 
            >
             <FontAwesome name="save" size={20} />
            </AppButton>   
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '80%'
  },
  buttons: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: '40%'
  }
})