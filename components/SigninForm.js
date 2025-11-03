import React, { useCallback, useReducer } from 'react'
import Input from './Input'
import SubmitButton from './SubmitButton'
import { FontAwesome } from '@expo/vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons/Feather';
import { validateEmail, validatePassword } from '../utils/ValidationConstraint';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducers';
import { signIn } from '../utils/actions/authActions';

const initialState ={
  inputValues:{
    email: "",
    password: "",
  },
  inputValidities:{
    email: false,
    password: false,
  },
  formIsValid: false
}

const SigninForm = props => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState)
  const inputChangeHandler = useCallback((inputId, inputValue) => {
    const result = validateInput(inputId, inputValue)
    dispatchFormState({ inputId, validationResult: result, inputValue})
  }, [dispatchFormState])

  const authHandler = () => {
    console.log('before signin: ', formState.inputValues.email,
      formState.inputValues.password)
    signIn({
      email: formState.inputValues.email,
      password: formState.inputValues.password
    })
  }

  return (
    <>
      <Input  id="email" label="Email" icon='mail'  autoCapitalize='none' keyboardType='email-address' iconPack={Feather} onInputChanged={inputChangeHandler} errorText={formState.inputValidities['email']} />
      <Input id="password" label="Password" icon='lock' autoCapitalize='none' secureTextEntry iconPack={FontAwesome} onInputChanged={inputChangeHandler} errorText={formState.inputValidities['password']} />
      <SubmitButton title='Sign in' onPress={authHandler} 
        // disabled={false} 
        style={{marginTop: 20}} disabled={!formState.formIsValid} />
    </>
  )
}

export default SigninForm
