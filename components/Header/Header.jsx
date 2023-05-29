import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useGetGenres from "../../hooks/useGetGenres";

export default function Header() {
  const genres = useGetGenres();
  return (
    <View style={styles.container}>
      {genres &&
        genres.map((v, i) => {
          return (
            <TouchableOpacity key={i} style={styles.genreButton}>
              <Text style={styles.genreText}>{v && v.genreName}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
    padding: 24,
  },
  genreButton: {
    backgroundColor: "#FF2800",
    padding: 12,
    borderRadius: 12,
  },
  genreText: {
    color: "white",
    fontWeight: "bold",
  },
});
