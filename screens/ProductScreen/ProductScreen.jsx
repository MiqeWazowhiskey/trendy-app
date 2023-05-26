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
          <Text style={styles.label}>{product && product.label}</Text>
          <TouchableOpacity style={styles.favButton}>
            <Entypo name="heart" style={styles.favIcon} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: product
                ? `${product.picture}`
                : "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {product && product.price + `${" $"}`}
          </Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {product && product.description}
          </Text>
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
    backgroundColor: "#FF9956",
    borderRadius: 12,
    alignSelf: "flex-start",
    margin: 5,
  },
  priceContainer: {
    flexDirection: "column",
    columnGap: 32,
    width: "50%",
  },
  label: {
    fontWeight: "600",
    fontSize: 32,
    marginTop: 32,
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
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
    borderRadius: 12,
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
    alignItems: "center",
  },
  favIcon: {
    color: "gray",
  },
  favButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "gray",
    marginTop: 32,
    marginLeft: 12,
  },
});
