import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

export default function DefaultInput() {
  const [text, onChangeText] = React.useState("");

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      textContentType="emailAddress"
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
