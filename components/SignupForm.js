import React, { useCallback, useEffect, useReducer, useState } from 'react'
import Input from './Input'
import SubmitButton from './SubmitButton'
import { FontAwesome } from '@expo/vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons/Feather';
import { validateEmail, validatePassword, validateString } from '../utils/ValidationConstraint';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducers';
import { signUp } from '../utils/actions/authActions';
import { ActivityIndicator, Alert } from 'react-native';
import colors from '../constants/colors';

const initialState ={
  inputValues:{
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  inputValidities:{
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false
}

const SignupForm = props => {

  const [formState, dispatchFormState] = useReducer(reducer, initialState)
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const inputChangeHandler = useCallback((inputId, inputValue) => {
    const result = validateInput(inputId, inputValue)
    dispatchFormState({ inputId, validationResult: result, inputValue})
  }, [dispatchFormState])

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const authHandler = async () => {
    console.log('before signup line: ', formState.inputValues.firstName, formState.inputValues.lastName, formState.inputValues.email, formState.inputValues.password)

    try {
      setIsLoading(true)
      await signUp({
        firstName: formState.inputValues.firstName,
        lastName: formState.inputValues.lastName,
        email: formState.inputValues.email,
        password: formState.inputValues.password,
      })
      setError(null)
    } catch (error) {
      setIsLoading(false)
      setError(error.message)
      
    }    
  }

  return (
    <>
      <Input id="firstName" label="First Name" icon='user-o' autoCapitalize='none' iconPack={FontAwesome} onInputChanged={inputChangeHandler} errorText={formState.inputValidities['firstName']} />
      <Input id="lastName" label="Last Name" icon='user-o' autoCapitalize='none' iconPack={FontAwesome} onInputChanged={inputChangeHandler} errorText={formState.inputValidities['lastName']} />
      <Input id="email" label="Email" icon='mail' autoCapitalize='none' keyboardType='email-address' iconPack={Feather} onInputChanged={inputChangeHandler} errorText={formState.inputValidities['email']} />
      <Input id="password" label="Password" icon='lock' autoCapitalize='none' secureTextEntry iconPack={FontAwesome} onInputChanged={inputChangeHandler} errorText={formState.inputValidities['password']} />
      {isLoading ? 
      (<ActivityIndicator size={'small'} color={colors.primary} style={{marginTop: 10}}/>) : (
      <SubmitButton title='Sign up' onPress={authHandler} 
        // disabled={false} 
        style={{marginTop: 20}} disabled={!formState.formIsValid} />)}
    </>
  )
}

export default SignupForm
