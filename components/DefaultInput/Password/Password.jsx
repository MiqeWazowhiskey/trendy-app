import { StyleSheet, TextInput } from "react-native";
import React from "react";

export default function Password({ onChangeText, value, onBlur, name }) {
  return (
    <TextInput
      autoComplete="off"
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={true}
      onBlur={onBlur}
      name={name}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderBottomWidth: 1,
    borderColor: "#FF9956",
    padding: 10,
  },
});
