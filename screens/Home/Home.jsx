import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { ProductCard } from "../../components";
import useGetMovies from "../../hooks/useGetMovies";
import { Header } from "../../components";
export default function Home({ navigation }) {
  const movies = useGetMovies();

  return (
    <Layout>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Header />
      <View style={styles.cardContainer}>
        {movies &&
          movies.data.map((v, i) => {
            return <ProductCard key={i} data={v} navigation={navigation} />;
          })}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 24,
    rowGap: 24,
    overflow: "scroll",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
  x: {
    width: "100%",
    height: "10%",
  },
  logo: {
    height: "4%",
    width: "50%",
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 32,
  },
});
