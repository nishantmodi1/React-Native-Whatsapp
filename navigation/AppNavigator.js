import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import AuthScreen from '../screens/AuthScreen';

const AppNavigator = props => {
  const isAuth = false

  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
        {isAuth && <MainNavigator />}
        {!isAuth && <AuthScreen />}
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
