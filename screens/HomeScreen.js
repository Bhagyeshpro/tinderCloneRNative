import React, { useContext, useLayoutEffect } from 'react'
import { View, Text,Button, SafeAreaView, TouchableOpacity, Image } from 'react-native' 
import { StateContext } from '../hooks/StateContext'
import tw from "tailwind-rn";
import {Ionicons} from "@expo/vector-icons";
import {Swiper} from "react-native-deck-swiper";

const HomeScreen = ({navigation}) => {
    const {logOut, user} = useContext(StateContext);
    console.log(user)

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false,
    //     })
    // }, []);
    return (
        <SafeAreaView style={{marginTop: "5%"}}>
            {/* Header */}
            <View style={tw("flex-row items-center justify-between px-5")}>
                <TouchableOpacity onPress={logOut}>
                    <Image
                        style={tw("h-10 w-10 rounded-full")}
                        source={{ uri: user.photoURL }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={tw("h-14 w-14")}
                        source={{ uri: "https://spng.pngfind.com/pngs/s/13-131073_this-post-is-a-part-of-tinder-logo.png"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Chats')}
                >
                    <Ionicons name="chatbubbles" size={30} color="#ff5864" />
                </TouchableOpacity>

            </View>


            {/* <Text>I am  </Text>
            <Button title="Logout" onPress={logOut} /> */}
        </SafeAreaView>
    )
}

export default HomeScreen
