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
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalS, setEnteredGoalS] = useState<any>([]);

  const addGoalHandler = (goalTitle:string) => {
    setEnteredGoalS((currentGoals: any) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    console.log(enteredGoalS);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <GoalInput onAddGoal={addGoalHandler}/>
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
