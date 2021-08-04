import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import Card from "./QuestionCard";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>The Birthday App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    padding: 30,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 25,
  },
});

export default Header;
