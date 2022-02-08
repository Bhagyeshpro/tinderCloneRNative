import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { StateContext } from './hooks/StateContext';

// Screens
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from "./screens/LoginScreen"

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { user } = useContext(StateContext) 
    console.log(user);

    return (
        <Stack.Navigator>
        {user ? (
            <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chats" component={ChatScreen} />
            </>
        ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
        )
        }
            </Stack.Navigator>
    )
}

export default StackNavigator
