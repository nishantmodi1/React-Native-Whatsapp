import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SettingsScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Settings screen</Text>
    </View>
  )
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})