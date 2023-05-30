import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { CartCard } from "../../components";

export default function Orders() {
  return (
    <Layout>
      <View style={styles.container}>
        <CartCard />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("screen").height - 80,
    alignContent: "center",
    justifyContent: "center",
    padding: 12,
  },
});
