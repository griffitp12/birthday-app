import React from "react";
import { Button, View, Text, StyleSheet, Modal, TextInput } from "react-native";

import Colors from "../constants/Colors";

const QuestionModal = (props) => {
  hideModalHandler = () => {
    console.log("hiding modal");
    props.setModalVisible(!props.modalVisible);
  };

  answerQuestionHandler = () => {
    console.log("hiding modal with answer");
    props.setModalVisible(!props.modalVisible);
  };
  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{props.question}</Text>
        <TextInput></TextInput>
        <View style={styles.button}>
          <Button
            title="Add Answer"
            color="red"
            onPress={answerQuestionHandler}
          />
        </View>
        <View style={styles.button}>
          <Button title="Close without answering" onPress={hideModalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: Colors.accent,
    alignItems: "center",
    justifyContent: "center",
    padding: 69,
  },
  modalText: {
    fontSize: 20,
  },
});

export default QuestionModal;
