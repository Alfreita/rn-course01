import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const GoalInput = (props: any) => {
  return (
    <View style={styles.header}>
      <TextInput
        placeholder="course goals"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="add" onPress={addGoalHandler} />
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
