import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Header, Avatar } from "react-native-elements";

/* import Header from "./src/components/Header"; */
import ProfileModal from "./src/modals/ProfileModal";
import Login from "./src/views/Login";
import Register from "./src/views/Register";
import QuestionsDash from "./src/views/QuestionsDash";
import Colors from "./src/constants/Colors";

// this variable is outside App only because of an example I found in the apollo docs
const client = new ApolloClient({
  uri: `https://1c1282a0e700.ngrok.io/graphql`, //should set this to a variable?
  cache: new InMemoryCache(),
});

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState({});
  const [profileModalVisible, setProfileModalVisible] = useState(false);

  const profileViewHandler = () => {
    if (user.username) {
      setProfileModalVisible(true);
    } else {
      alert("please log in!");
    }
  };

  const mainViewHandler = () => {
    if (isLoggedIn) {
      return <QuestionsDash />;
    } else if (isRegistered) {
      return (
        <Login
          setIsRegistered={setIsRegistered}
          logInUser={setIsLoggedIn}
          setUser={setUser}
        />
      );
    } else {
      return (
        <Register
          setIsRegistered={setIsRegistered}
          logInUser={setIsLoggedIn}
          setUser={setUser}
        />
      );
    }
  };

  return (
    <ApolloProvider client={client}>
      <View style={styles.screen}>
        <Header
          containerStyle={styles.header}
          leftComponent={{ icon: "menu" }}
          centerComponent={{ text: "BIRTHDAY APP" }}
          rightComponent={
            <Avatar rounded title="MD" onPress={profileViewHandler} />
          }
        />
        <ProfileModal
          modalVisible={profileModalVisible}
          user={user}
          setModalVisible={setProfileModalVisible}
        />
        {mainViewHandler()}
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 90,
    padding: 30,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
