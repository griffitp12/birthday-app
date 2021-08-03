import React from "react";
import { View, ActivityIndicator } from "react-native";

import Colors from "../constants/Colors";

export default () => (
  <View>
    <ActivityIndicator size="large" color={Colors.accent} />
  </View>
);
