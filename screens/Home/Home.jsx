import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/actions";
import { ProductCard } from "../../components";
import useGetMovies from "../../hooks/useGetMovies";
export default function Home({ navigation }) {
  const movies = useGetMovies();
  console.log(movies);
  return (
    <Layout>
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
    padding: 24,
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
});
