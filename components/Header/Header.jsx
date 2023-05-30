import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import useGetGenres from "../../hooks/useGetGenres";
import { useDispatch, useSelector } from "react-redux";
import { selectGenre, setSearch } from "../../Redux/actions";
import { TextInput } from "react-native";
import FontAwasome from "react-native-vector-icons/FontAwesome";
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
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => handleSelect(null)}
      >
        <Text style={styles.genreText}>
          <FontAwasome name="search" size={18} color="#EF4444" />
        </Text>
        <TextInput
          style={styles.search}
          placeholder={`Search`}
          placeholderTextColor={"#F29559"}
          onChange={(event) => {
            const text = event.nativeEvent.text;
            dispatch(setSearch(text));
          }}
        />
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
    paddingTop: 12,
    alignItems: "center",
  },
  genreButton: {
    backgroundColor: "#EF4444",
    padding: 12,
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 18,
  },
  genreText: {
    color: "white",
    fontWeight: "bold",
  },
  search: {
    width: "100%",
    color: "#EF4444",
  },
  searchButton: {
    flexDirection: "row",
    width: "90%",
    padding: 12,
    columnGap: 12,
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#EF4444",
  },
});
