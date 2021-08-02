import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./src/components/Header";
import Card from "./src/components/Card";
import Questions from "./src/data/questions";

export default function App() {
  let cardList = Questions.map((question) => {
    return <Card question={question.question} key={question.id}></Card>;
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
