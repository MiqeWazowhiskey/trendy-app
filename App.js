import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./components/Layout";
export default function App() {
  return (
    <Layout>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
