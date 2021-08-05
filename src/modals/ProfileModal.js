import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TextInput } from "react-native";
import { Button } from "react-native-elements";

import Colors from "../constants/Colors";

const ProfileModal = (props) => {
  const hideModalHandler = () => {
    props.setModalVisible(false);
  };
  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text>This is the profile view</Text>
        <Button title="Close tha modal" onPress={hideModalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 30,
  },
});

export default ProfileModal;
