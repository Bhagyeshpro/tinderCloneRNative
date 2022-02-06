import React from "react";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/AuthContext";
import { AuthStateProvider } from "./hooks/StateContext";

export default function App() {
  return (
    <NavigationContainer>
    <AuthStateProvider>
        <StackNavigator />
    </AuthStateProvider>
    </NavigationContainer>
  );
}
