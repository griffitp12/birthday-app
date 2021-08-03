import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./src/components/Header";
import QuestionsDash from "./src/views/QuestionsDash";

import ENV from "./src/constants/ENV";

// this variable is outside App only because of an example I found in the apollo docs
const client = new ApolloClient({
  uri: `https://${ENV.localhost}:${ENV.port}/graphql`, //should set this to a variable?
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.screen}>
        <Header />
        <QuestionsDash />
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
