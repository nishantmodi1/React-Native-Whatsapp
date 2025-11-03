import React, { useCallback, useState, useEffect } from 'react';
import {
  ImageBackground,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import backgroundImage from '../assets/Images/droplet.jpeg';
import colors from '../constants/colors';
import Feather from '@expo/vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height: screenHeight } = Dimensions.get('window');

const ChatScreen = props => {
  const [messageText, setMessageText] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  const sendMessage = useCallback(() => {
    setMessageText('');
  }, [messageText]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      />
      
      <SafeAreaView 
        edges={['bottom']} 
        style={[
          styles.inputWrapper,
          Platform.OS === 'android' && keyboardHeight > 0 && {
            marginBottom: keyboardHeight,
          }
        ]}
      >
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => console.log('pressed@')}
          >
            <Feather name="plus" size={24} color={colors.blue} />
          </TouchableOpacity>
          <TextInput
            placeholder="Type here..."
            style={styles.textBox}
            onChangeText={text => setMessageText(text)}
            value={messageText}
            onSubmitEditing={sendMessage}
            multiline={false}
            blurOnSubmit={true}
          />
          {messageText === '' && (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log('pressed@')}
            >
              <Feather name="camera" size={24} color={colors.blue} />
            </TouchableOpacity>
          )}
          {messageText !== '' && (
            <TouchableOpacity
              style={[styles.mediaButton, styles.sendButton]}
              onPress={sendMessage}
            >
              <Feather name="send" size={20} color={'white'} />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  inputWrapper: {
    backgroundColor: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.lightGrey,
    minHeight: 50,
  },
  textBox: {
    flex: 1,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
    maxHeight: 100,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  mediaButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 8,
  },
});