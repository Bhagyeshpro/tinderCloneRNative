import React from 'react'
import { View, Text,Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>I am Home</Text>
            <Button title="Chats" onPress={() => navigation.navigate("Chats")} />
        </View>
    )
}

export default HomeScreen
