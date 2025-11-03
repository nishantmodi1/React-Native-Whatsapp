import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton';

const ChatListScreen = (props) => {

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item 
            title='New Chat'
            iconName="create-outline"
            onPress={() => props.navigation.navigate('NewChat')} />
        </HeaderButtons>
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Chat List screen</Text>
      <Button title='Go to Chat Screen' onPress={() => props.navigation.navigate('ChatScreen')}/>
    </View>
  )
}

export default ChatListScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center', 
  }
})