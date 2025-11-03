import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ChatSettingsScreen = props => {

  return (
    <View style={StyleSheet.container}>
      <Text>Chat Settings screen</Text>
    </View>
  )
}

export default ChatSettingsScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})
