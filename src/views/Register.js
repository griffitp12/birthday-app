import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Input } from "react-native-elements";

import CardTemplate from "../components/CardTemplate";
import register from "../functions/auth/register"

const Register = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const setUsernameHandler = () => {
    // verify login info
    props.setUser({ username: enteredName });
    props.logInUser(true);
  };

  const registerUser = () => {
    const newUser = {
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword
    };
    register.registerUser(newUser);
  };

  const toggleLogin = () => {
    props.setIsRegistered(true);
  };

  return (
    <CardTemplate>
      <Text>Please register here!</Text>
      <Input
        placeholder="enter your username"
        onChangeText={setEnteredUsername}
      />
      <Input
        placeholder="enter your email address"
        onChangeText={setEnteredEmail}
      />
      <Input
        placeholder="choose a password"
        onChangeText={setEnteredPassword}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="REGISTER" onPress={registerUser} />
        </View>
        <View style={styles.button}>
          <Button title="TAKE ME TO LOGIN" onPress={toggleLogin} />
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
export default Register;
