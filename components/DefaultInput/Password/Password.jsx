import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

export default function Password() {
  const [password, onChangePassword] = React.useState("");

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangePassword}
      value={password}
      textContentType="password"
      secureTextEntry={true}
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
