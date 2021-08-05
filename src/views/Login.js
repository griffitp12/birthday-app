import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

import CardTemplate from "../components/CardTemplate";

const Login = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const setUsernameHandler = () => {
    // verify login info
    props.setUser({ username: enteredName });
    props.logInUser(true);
  };

  const toggleRegister = () => {
    props.setIsRegistered(false)
  }

  return (
    <CardTemplate>
      <Text>This is the login screen</Text>
      <TextInput
        style={styles.input}
        value={enteredName}
        onChangeText={setEnteredName}
      ></TextInput>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="LOGIN" onPress={setUsernameHandler} />
        </View>
        <View style={styles.button}>
          <Button title="Register a new user!" onPress={toggleRegister} />
        </View>
      </View>
    </CardTemplate>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
export default Login;
