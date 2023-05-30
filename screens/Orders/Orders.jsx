import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { CartCard } from "../../components";
import useGetCart from "../../hooks/useGetCart";
import { useSelector } from "react-redux";

export default function Orders({ navigation }) {
  const user = useSelector((state) => state.user);
  const cart = useGetCart(user.user.id);

  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView style={styles.productsScroll}>
          <Text style={styles.messageText}>Enjoy the Show...</Text>

          <View style={styles.productContainer}>
            {cart &&
              cart.data.movies.map((v, i) => {
                return <CartCard key={i} product={v} navigation={navigation} />;
              })}
          </View>
        </ScrollView>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>{`Summary: ${
            cart && cart.data.price
          } $`}</Text>
          <TouchableOpacity style={styles.paymentButton}>
            <Text style={styles.paymentText}>Go to payment</Text>
          </TouchableOpacity>
        </View>
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
  productContainer: {
    height: "100%",
  },
  productsScroll: { height: "100%", marginTop: "10%" },
  summaryText: {
    fontWeight: "bold",
    fontSize: 24,
    width: "50%",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  summaryContainer: {
    marginBottom: "20%",
    flexDirection: "row",
    marginBottom: "auto",
    padding: 12,
  },
  paymentButton: {
    width: "30%",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 8,
    marginLeft: "auto",
  },
  paymentText: {
    color: "white",
    fontSize: 13,
  },
  messageText: {
    padding: 12,
    fontSize: 32,
    fontWeight: "bold",
  },
});
