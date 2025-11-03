import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

const PageContainer = props => {
  return (
    // <SafeAreaView style={styles.container}>
      <View style={{...styles.container, ...props.style}}>
        {props.children}
      </View>
    // </SafeAreaView>
  )
}

export default PageContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
  }
})