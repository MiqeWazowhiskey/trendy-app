import { StyleSheet, View, Image, Dimensions } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { ProductCard } from "../../components";
import useGetMovies from "../../hooks/useGetMovies";
import { Header } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { selectGenre } from "../../Redux/actions";
export default function Home({ navigation }) {
  const genre = useSelector((state) => state.genre);
  const movies = useGetMovies();
  const input = useSelector((state) => state.search);
  return (
    <Layout>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Header />
      <View style={styles.cardContainer}>
        {input.search && input.search.length > 2
          ? movies &&
            movies
              .filter((v) =>
                v.title.toLowerCase().includes(input.search.toLowerCase())
              )
              .map((v, i) => {
                return <ProductCard key={i} data={v} navigation={navigation} />;
              })
          : genre.genre
          ? movies &&
            movies
              .filter((v) => v.genre === genre.genre)
              .map((v, i) => {
                return <ProductCard key={i} data={v} navigation={navigation} />;
              })
          : movies &&
            movies.map((v, i) => {
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
    height: Dimensions.get("screen").height,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },

  logo: {
    height: "10%",
    width: "50%",
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 32,
  },
});
