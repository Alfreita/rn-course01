import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [enteredGoalS, setEnteredGoalS] = useState<any>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setEnteredGoalS((currentGoals: any) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    console.log(enteredGoalS);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      <FlatList
        data={enteredGoalS}
        keyExtractor={(item, index) => item.key}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
