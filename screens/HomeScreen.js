import React, { useContext } from 'react'
import { View, Text,Button } from 'react-native'
import { StateContext } from '../hooks/StateContext'

const HomeScreen = ({navigation}) => {
    const [user, setUser] = useContext(StateContext);
    console.log(user);
    return (
        <View>
            <Text>I am </Text>
            {/*  */}
            {
                user.map((user, index) => (
                    <Text key={index}>{user}</Text>
                ))
            }
            <Button title="Chats" onPress={() => navigation.navigate("Chats")} />
        </View>
    )
}

export default HomeScreen
