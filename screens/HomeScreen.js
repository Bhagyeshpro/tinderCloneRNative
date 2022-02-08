import React, { useContext } from 'react'
import { View, Text,Button } from 'react-native'
import { StateContext } from '../hooks/StateContext'

const HomeScreen = ({navigation}) => {
    const {logOut} = useContext(StateContext);
    // console.log(user);
    return (
        <View>
            <Text>I am  </Text>
            <Button title="Logout" onPress={logOut} />
        </View>
    )
}

export default HomeScreen
