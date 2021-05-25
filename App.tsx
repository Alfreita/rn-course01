import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.header}>
        <TextInput placeholder="course goals" style={styles.textInput} />
        <Button title="add" onPress={() => {}} />
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
