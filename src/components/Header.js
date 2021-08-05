import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>The Birthday App</Text>
      <Avatar style={styles.avatar} rounded icon={{ name: "home" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    padding: 30,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 25,
  },
  avatar: {
    alignSelf: "flex-end"
  }
});

export default Header;
