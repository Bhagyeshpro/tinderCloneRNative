import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useState }  from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(["Mihir"])
  return (
    <AuthContext.Provider value={[user, setUser]}>
        {props.childern}
    </AuthContext.Provider>
  );
};

// export default function useAuth() {
//   return useContext(AuthContext);
// }



