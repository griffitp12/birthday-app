import React from "react";
import { View, ActivityIndicator } from "react-native";

import Colors from "../constants/Colors";

const Loading = (props) => (
  <View>
    <ActivityIndicator size="large" color={Colors.accent} />
  </View>
);

export default Loading;
