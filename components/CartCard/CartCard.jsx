import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useGetCart from "../../hooks/useGetCart";
import { useSelector } from "react-redux";

export default function CartCard() {
  const user = useSelector((state) => state.user);
  const cart = useGetCart(user.user.id);
  console.log(cart.data.movies);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}></View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Label</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "15%",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 12,
    borderWidth: 4,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 32,
  },
});
