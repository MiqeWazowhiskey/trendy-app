import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigation.navigate("ProductScreen", { product })}
    >
      <Image
        source={{
          uri: `${product.picture}`,
        }}
        style={styles.picture}
      />
      <View style={styles.textSection}>
        <Text style={styles.label}>{`${product.label}`}</Text>
        <Text style={styles.description}>{`${product.description}`}</Text>
        <Text style={styles.price}>{`${product.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    height: "20%",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#F5EBDE",
  },
  picture: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
    borderRadius: 12,
  },
  textSection: {
    width: "100%",
    height: "40%",
    padding: 5,
  },
  price: {
    fontSize: 12,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  description: {
    fontSize: 8,
    alignSelf: "flex-start",
  },
  label: {
    fontWeight: "bold",
    fontSize: 10,
    alignSelf: "flex-start",
  },
});
