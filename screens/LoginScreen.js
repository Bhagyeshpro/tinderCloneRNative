import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthStateProvider, StateContext } from '../hooks/StateContext'

const LoginScreen = () => {
    const { signInWithGoogle } = useContext(StateContext);
    
    return (
        <View>
            <Text>Login Now</Text>
            <Button title='Login' onPress={signInWithGoogle} />
        </View>
    )
}

export default LoginScreen
