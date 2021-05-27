import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.listView}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listView: {
    padding: 10,
    backgroundColor: "#ccc",
    borderBottomColor: "black",
    borderWidth: 1,
    marginVertical: 30,
  },
});
export default GoalItem;
