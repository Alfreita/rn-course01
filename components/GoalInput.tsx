import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props: any) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.header}>
        <TextInput
          placeholder="course goals"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title= "Cancel" color="red"onPress={props.cancelModal}/>
        <Button title="Add" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
    marginBottom: 10,
  },
});
export default GoalInput;
