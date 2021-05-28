import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalS, setEnteredGoalS] = useState<any>([]);
  const [ismodal, setIsModal] = useState(false);

  const addGoalHandler = (goalTitle: string) => {
    setEnteredGoalS((currentGoals: any) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    setIsModal(false);
  };

  const cancelGoalAddHandler = () => {
    setIsModal(false);
  };
  const removeGoalHandler = (goalKey: String) => {
    setEnteredGoalS((currentGoals: any) => {
      return currentGoals.filter((goal: any) => goal.key !== goalKey);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsModal(true)} />
      {/* <StatusBar style="auto" /> */}
      <GoalInput onAddGoal={addGoalHandler} visible={ismodal} cancelModal={cancelGoalAddHandler}/>
      <FlatList
        data={enteredGoalS}
        keyExtractor={(item, index) => item.key}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
