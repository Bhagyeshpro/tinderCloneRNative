import React from 'react'
import { View, Text, Button } from 'react-native'

const ChatScreen = ({navigation}) => {
    return (
        <View>
            <Text>I am Chat Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}

export default ChatScreen
