import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props: any) => {
  return (
    <View style={styles.listView}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    padding: 10,
    backgroundColor: "#ccc",
    borderBottomColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
