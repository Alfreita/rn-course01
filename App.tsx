import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [enteredGoalS, setEnteredGoalS] = useState<any>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setEnteredGoalS((currentGoals: any) => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.header}>
        <TextInput
          placeholder="course goals"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="add" onPress={addGoalHandler} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
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
