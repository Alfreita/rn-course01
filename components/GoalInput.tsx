import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props: any) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.header}>
      <TextInput
        placeholder="course goals"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
  },
});
export default GoalInput;
