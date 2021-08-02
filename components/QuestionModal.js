import React, { useState } from "react";
import { Button, View, Text, StyleSheet, Modal, TextInput } from "react-native";

import Colors from "../constants/Colors";

const QuestionModal = (props) => {
  const [enteredAnswer, setEnteredAnswer] = useState("");

  hideModalHandler = () => {
    props.setModalVisible(!props.modalVisible);
  };

  enteredAnswerHandler = (enteredAnswer) => {
    setEnteredAnswer(enteredAnswer);
  };

  answerQuestionHandler = () => {
    props.setAnswer(enteredAnswer);
    props.setModalVisible(!props.modalVisible);
  };

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{props.question}</Text>
        <TextInput
          placeholder="add your answer here"
          style={styles.input}
          onChangeText={enteredAnswerHandler}
          value={enteredAnswer}
        />
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
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default QuestionModal;
