import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/actions";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <Layout>
      <View style={styles.container}>
        <Ionicons name="person-circle-outline" size={256} color={"gray"} />
        <Text style={{ fontWeight: "bold", fontSize: 32 }}>Account :</Text>
        <Text style={{ fontWeight: "normal", fontSize: 24 }}>
          {user.user.username}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
              dispatch(logout());
            }}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addMovieButton}
            onPress={() => navigation.navigate("AddMovieScreen")}
          >
            <Text style={styles.addMovieText}>Add Movie</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "20%",
  },
  logoutButton: {
    padding: 12,
    backgroundColor: "#FF9956",
    borderRadius: 12,
    marginTop: "30%",
    width: "40%",
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  addMovieButton: {
    backgroundColor: "#EF4444",
    padding: 12,
    width: "40%",
    marginTop: "30%",

    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  addMovieText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 12,
  },
});
