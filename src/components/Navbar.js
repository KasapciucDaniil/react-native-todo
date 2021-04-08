import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native';

export const Navbar = (props) => {
  return (
    <View style={{...styles.navbar, ...Platform.select({
      ios: styles.navbarIos,
      android: styles.navbarAndroid
    })}}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'blue',
    paddingBottom: 10
  },
  navbarAndroid: {
    backgroundColor: 'blue'
  },
  navbarIos: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  text: {
   color: Platform.OS === "ios" ? 'black': '#fff' ,
   fontSize: 20
  }
})