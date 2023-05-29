import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { CommonActions } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

export default function ProductScreen({ route, navigation }) {
  const { product } = route.params;
  return (
    <Layout>
      <View style={styles.container}>
        <TouchableOpacity>
          <MaterialIcon
            name="arrow-back-ios"
            style={styles.arrow}
            size={32}
            onPress={() => navigation.dispatch(CommonActions.goBack())}
          />
        </TouchableOpacity>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>
            {product && product.title && product.title}
          </Text>
        </View>
        <View style={styles.genreContainer}>
          <Text style={styles.genreText}>{product.genre}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                product.imageURL && product
                  ? `${product.imageURL}`
                  : "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {product && product.description}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {product && product.price + `${" $"}`}
          </Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 12,
  },
  addButton: {
    padding: 12,
    backgroundColor: "#FF2800",
    borderRadius: 12,
    alignSelf: "flex-start",
    margin: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
  priceContainer: {
    flexDirection: "column",
    columnGap: 32,
    width: "100%",
    alignItems: "center",
  },
  label: {
    fontWeight: "600",
    fontSize: 32,
    marginTop: 32,
    color: "#FF9956",
    textShadowColor: "black",
    textAlign: "center",
  },
  description: {
    fontSize: 24,
    margin: 5,
  },
  price: { fontSize: 24, fontWeight: "800", margin: 5 },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  imageContainer: {
    margin: 12,
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: "contain",
    borderRadius: 12,
    marginBottom: 23,
    marginTop: 23,
  },
  descriptionContainer: {
    padding: 12,
    margin: 5,
  },
  arrow: {
    marginTop: 32,
  },
  labelContainer: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  favIcon: {
    color: "gray",
  },
  genreContainer: {
    marginRight: "auto",
    marginLeft: "auto",
  },
});
