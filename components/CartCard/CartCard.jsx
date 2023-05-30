import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import useDeleteItemFromCart from "../../hooks/useDeleteItemFromCart";

export default function CartCard({ product, navigation }) {
  const user = useSelector((state) => state.user);
  const handleDelete = async () => {
    useDeleteItemFromCart(user.user.id, product.id);
  };
  return (
    product && (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate("ProductScreen", { product: product })
        }
      >
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: product.imageURL && `${product.imageURL}` }}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>
            {product.title && product.title.length > 18
              ? `${product.title.substring(0, 18)}...`
              : product.title}
          </Text>
          <Text style={styles.priceText}>{`${product.price} $`}</Text>
          <Text style={styles.genre}>{product.genre}</Text>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.deleteText}>X</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    height: "15%",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 12,
    backgroundColor: "#F5EBDE",
    padding: 3,
    justifyContent: "space-between",
    margin: 12,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    width: "100%",
    justifyContent: "flex-start",
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    borderRadius: 12,
  },
  imgContainer: {
    height: "90%",
    width: "20%",
  },
  deleteText: { color: "white" },
  deleteButton: {
    width: 24,
    height: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    backgroundColor: "gray",
    marginTop: "4%",
    marginRight: "2%",
  },
  priceText: {
    fontSize: 20,
  },
  textContainer: {
    height: "100%",
    width: "70%",
  },
  genre: {
    color: "gray",
  },
});
