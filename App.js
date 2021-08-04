import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./src/components/Header";
import Login from "./src/views/Login";
import QuestionsDash from "./src/views/QuestionsDash";

// this variable is outside App only because of an example I found in the apollo docs
const client = new ApolloClient({
  uri: `https://4432886bd40a.ngrok.io/graphql`, //should set this to a variable?
  cache: new InMemoryCache(),
});

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});

  const viewHandler = () => {
    if (isLoggedIn) {
      return <QuestionsDash />;
    } else {
      return <Login logInUser={setIsLoggedIn} />;
    }
  };

  return (
    <ApolloProvider client={client}>
      <View style={styles.screen}>
        <Header />
        {viewHandler()}
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
