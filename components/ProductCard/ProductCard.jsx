import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";

export default function ProductCard({ data, navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProductScreen", { product: data })}
    >
      <Image
        source={{
          uri: data.imageURL
            ? `${data.imageURL}`
            : "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        }}
        style={styles.picture}
      />

      <View style={styles.textSection}>
        <Text style={styles.label}>
          {data.title.length > 24
            ? `${data.title.substring(0, 24)}...`
            : `${data.title}`}
        </Text>
        <Text style={styles.description}>{`${data.description.substring(
          0,
          90
        )}...`}</Text>
        <View style={styles.bottomCardContainer}>
          <Text style={styles.price}>{`${data.price + `${" $"}`}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "45%",
    height: "24%",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#F5EBDE",
  },
  picture: {
    width: "50%",
    height: "60%",
    resizeMode: "contain",
    borderRadius: 12,
  },
  textSection: {
    width: "100%",
    height: "40%",
    padding: 5,
  },
  bottomCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 12,
    padding: 5,
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  description: {
    fontSize: 8,
    alignSelf: "flex-start",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 10,
    height: "35%",
    alignSelf: "flex-start",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  favIconContainer: {
    alignSelf: "flex-start",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "gray",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 4,
  },
  favIcon: {
    color: "gray",
  },
});
