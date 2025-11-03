import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, TextInput } from 'react-native'
import colors from '../constants/colors';

const Input = props => {
  const IconComponent = props.iconPack;
  const changeText = text => {
    props.onInputChanged(props.id, text)
  }
  return (
      <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.inputContainer}>
          {props.icon && IconComponent && 
          <IconComponent name={props.icon} 
          size={props.iconSize || 15} style={styles.icon} />}
          <TextInput {...props} style={styles.input} onChangeText={changeText} />
        </View>

        {props.errorText && <View style={styles.errorContaienr}>
            <Text style={styles.errorText}>{props.errorText[0]}</Text>
        </View>}
      </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label:{
    marginVertical: 8,
    fontFamily: 'blackRegular',
    letterSpacing: 0.3,
    color: colors.textColor
  },
  inputContainer:{
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.nearlyWhite,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    alignItems: 'center',
  },
  icon:{
    marginRight: 10,
    color: colors.grey
  },
  input:{
    color: colors.textColor,
    fontFamily: 'blackLight',
    flex: 1,
    letterSpacing: 0.3,
    paddingTop: 0

  },
  errorContaienr:{
    marginVertical: 5,
  },
  errorText:{
    color: colors.red,
    fontFamily: 'blackRegular ',
    letterSpacing: 0.3,
    fontSize: 13
  }
})