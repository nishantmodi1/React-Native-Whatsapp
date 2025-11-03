import React from 'react'
import { getFirebaseApp } from './../firebseHelper';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { child, getDatabase, ref, set } from 'firebase/database';

export const signUp = async ({firstName, lastName, email, password }) => {
  console.log('signUp value: ', firstName, lastName, email, password)
  const app = getFirebaseApp()
  const auth = getAuth(app)
  console.log(auth)
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const { uid } = result.user;
    const userData = await createUser({firstName, lastName, email, userId: uid})
    console.log('result: ', {result, userData})

  } catch (error) {
    console.log('error in signup:', error) 

    const errorCode = error.code
    let errorMessage = 'Something went wrong, please try again later.'

    if (errorCode === 'auth/email-already-in-use') {
      errorMessage = 'This Email already in use'
    }
    throw new Error(errorMessage)
  }
}

const createUser = async ({firstName, lastName, email, userId}) => {
  const firstLastName = `${firstName}  ${lastName}`.toLowerCase()
  const userData = {
    firstName,
    lastName,
    firstLastName,
    email,
    userId,
    signUpDate: new Date().toISOString(),
  }

  const dbRef = ref(getDatabase())
  const childRef = child(dbRef, `users/${userId}`)/
  await set(childRef, userData)
  return userData
}

export const signIn = ({email, password}) => {
  console.log('signin value:', email, password)
}