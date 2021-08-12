import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Input } from "react-native-elements"

import CardTemplate from "../components/CardTemplate";
import login from "../functions/auth/login.js"

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  

  const loginHandler = () => {
    const userData = {
      email: enteredEmail,
      password: enteredPassword
    }
    login.loginUser(userData)
    /* props.setUser({ username: enteredName });
    props.logInUser(true); */
  };

  const toggleRegister = () => {
    props.setIsRegistered(false)
  }

  return (
    <CardTemplate>
      <Text>This is the login screen</Text>
      <Input
        placeholder="enter your email"
        value={enteredEmail}
        onChangeText={setEnteredEmail}
      ></Input>
      <Input
        placeholder="enter your password"
        value={enteredPassword}
        onChangeText={setEnteredPassword}
      ></Input>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="LOGIN" onPress={loginHandler} />
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
