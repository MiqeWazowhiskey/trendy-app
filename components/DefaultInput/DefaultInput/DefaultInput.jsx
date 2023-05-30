import { StyleSheet, TextInput } from "react-native";
import React from "react";

export default function DefaultInput({
  onChangeText,
  onBlur,
  name,
  value,
  keyboardType,
}) {
  return (
    <TextInput
      autoComplete="off"
      style={styles.input}
      onChangeText={onChangeText}
      onBlur={onBlur}
      name={name}
      value={value}
      keyboardType={keyboardType || "default"}
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
