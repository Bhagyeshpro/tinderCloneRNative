import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const AuthStateProvider = (props) => {
  const [user, setUser] = useState(["Mihir"]);

  return (
    <StateContext.Provider value={[user, setUser]}>
      {props.children}
    </StateContext.Provider>
  );
};

