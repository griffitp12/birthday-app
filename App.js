import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./src/components/Header";
import QuestionsDash from "./src/views/QuestionsDash";

import { Constants } from "react-native-unimodules";
const { manifest } = Constants;
const api =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:4000`)
    : undefined;

console.log("api:", api);

// this variable is outside App only because of an example I found in the apollo docs
const client = new ApolloClient({
  uri: `http://packager.ek-r72.anonymous.birthday-app.exp.direct:4000/graphql`, //should set this to a variable?
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
