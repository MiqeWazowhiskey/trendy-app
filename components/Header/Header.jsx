import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useGetGenres from "../../hooks/useGetGenres";
import { useDispatch, useSelector } from "react-redux";
import { selectGenre } from "../../Redux/actions";

export default function Header() {
  const genres = useGetGenres();
  const dispatch = useDispatch();
  const handleSelect = (genre) => {
    dispatch(selectGenre(genre));
  };
  return (
    <View style={styles.container}>
      {genres &&
        genres.map((v, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.genreButton}
              onPress={() => handleSelect(v.genreName)}
            >
              <Text style={styles.genreText}>{v && v.genreName}</Text>
            </TouchableOpacity>
          );
        })}
      <TouchableOpacity
        style={styles.genreButton}
        onPress={() => handleSelect(null)}
      >
        <Text style={styles.genreText}>All</Text>
      </TouchableOpacity>
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
