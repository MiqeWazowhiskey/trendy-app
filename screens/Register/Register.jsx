import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { SafeAreaView } from "react-native-safe-area-context";
import DefaultInput from "../../components/DefaultInput/DefaultInput/DefaultInput";
import Password from "../../components/DefaultInput/Password";
export default function Register() {
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <SafeAreaView style={styles.inputContainer}>
          <View style={styles.defaultView}>
            <Text style={styles.label}>Email</Text>
            <DefaultInput />
          </View>
          <View style={styles.defaultView}>
            <Text style={styles.label}>Password</Text>
            <Password />
          </View>
          <View style={styles.defaultView}>
            <Text style={styles.label}>Reenter Password</Text>
            <Password />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.defaultView}>
              <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.defaultButtonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  inputContainer: {
    flex: 1,
    width: 240,
    rowGap: 12,
  },
  logo: {
    flex: 0.6,
    width: 196,
    height: 16,
    resizeMode: "contain",
  },
  label: {
    color: "#FF9956",
    textAlign: "center",
  },
  defaultView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  signInButton: {
    width: 96,
    height: 48,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#FF9956",
  },
  defaultButtonText: {
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    fontWeight: "bold",
  },
  registerButton: {
    width: 96,
    height: 48,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#FF2800",
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
  },
});
