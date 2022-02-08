import { View, Text } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import * as Google from "expo-google-app-auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase";

export const StateContext = createContext();

const config = {
  // Used Host.exp.exponent apiid
  androidClientId:
    "672969420721-3eloie5ljrkstevv3j3k3movhmrt243q.apps.googleusercontent.com",
  // androidClientId: "672969420721-mafcg6pkruh350o32rjndfjtv9ihcf4l.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permission: ["public_proflie", "email", "gender", "location"],
};

export const AuthStateProvider = (props) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  // For Loading state between login n home screeb
  const [loadingInitial, setLoadingInitial] = useState(true);
  // Global loading state
  const [loading, setLoading] = useState(false);

  // Clever way to use unsubscribe or clean up
  // It implicitly returns an unsubscribe
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged IN..
          setUser(user);
        } else {
          setUser(null);
        }
        setLoadingInitial(false);
      }),
    []
  );

  const logOut = () => {
    setLoading(true);

    signOut(auth).catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  const signInWithGoogle = async () => {
    setLoading(true);

    await Google.logInAsync(config)
      .then(async (logInResult) => {
        if (logInResult.type === "success") {
          // Login...
          const { idToken, accessToken } = logInResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );

          await signInWithCredential(auth, credential);
        }
        return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return (
    <StateContext.Provider
      value={{
        user,
        loading,
        error,
        logOut,
        signInWithGoogle,
      }}
    >
      {/* Loadinginitial will help in delay of home screen after the refresh or restarting app */}
      {!loadingInitial && props.children}
    </StateContext.Provider>
  );
};
