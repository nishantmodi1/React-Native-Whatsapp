import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PageContainer from '../components/PageContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignupForm from '../components/SignupForm';
import SigninForm from '../components/SigninForm';
import colors from '../constants/colors';
import logo from '../assets/Images/logo.png'

const AuthScreen = props => {
  const [isSignup, setIsSignup] = useState(false)
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardAvoidingView} 
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <PageContainer>
          <ScrollView 
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.imageContainer}>
              <Image source={logo} style={styles.image} resizeMode='contain'  />
            </View>
            {isSignup ? <SignupForm /> : <SigninForm />}
            <TouchableOpacity onPress={() => setIsSignup(prev => !prev)} style={styles.linkContainer}>
              <Text style={styles.link}>{`Switch to ${isSignup ? "Sign in" : "Sign up"}`}</Text>
            </TouchableOpacity>
          </ScrollView>
        </PageContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  link: {
    color: colors.blue,
    fontFamily: 'blackItalic'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: '50%',
  },
})