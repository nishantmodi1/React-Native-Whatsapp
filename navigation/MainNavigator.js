import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // or whatever icon library you're using
import ChatSettingsScreen from '../screens/ChatSettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatListScreen from '../screens/ChatListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen';
import colors from '../constants/colors';
import NewChatScreen from '../screens/NewChatScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomBackButton = ({ onPress, label = 'Back' }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      paddingVertical: 10,
      paddingHorizontal: 5,
    }}
  >
    <Ionicons name="chevron-back" size={24} color="#007AFF" />
    <Text
      style={{
        color: '#007AFF',
        fontSize: 17,
        marginLeft: 5,
      }}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: '' }}>
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{
          tabBarLabel: 'Chats',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#007AFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({ navigation }) => ({
            headerTitle: '',
            headerTitleStyle: {
              color: 'white',
              marginLeft: 50,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  console.log('Back is pressed@');
                  navigation.goBack();
                }}
                style={{ paddingLeft: 16, paddingVertical: 0 }}
              >
                <Text style={{ color: colors.blue, fontSize: 16 }}>Back</Text>
              </TouchableOpacity>
            ),
            headerBackTitleVisible: false,
            headerBackImage: () => null,
            headerBackVisible: false,
          })}
        />
        <Stack.Screen
          name="ChatSettings"
          component={ChatSettingsScreen}
          options={({ navigation }) => ({
            headerTitle: 'Chat Settings',
            headerLeft: () => (
              <CustomBackButton
                onPress={() => {
                  console.log('Settings Back is pressed@');
                  navigation.goBack();
                }}
                label="Back"
              />
            ),
          })}
        />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: 'containedModal' }}>
        <Stack.Screen
          name="NewChat"
          component={NewChatScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigator;
