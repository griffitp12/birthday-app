import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import Card from "./components/Card";
import Questions from "./questions/questions";

export default function App() {
  let cardList = Questions.map((question) => {
    return <Card question={question.question} id={question.id}></Card>;
  });

  return (
    <View style={styles.screen}>
      <Header />
      {cardList}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
