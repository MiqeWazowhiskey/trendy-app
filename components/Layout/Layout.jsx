import { StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
export default function Layout({ children }) {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
  },
});
