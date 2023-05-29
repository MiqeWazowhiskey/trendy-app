import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Layout from "../../components/Layout";
import { SafeAreaView } from "react-native-safe-area-context";
import DefaultInput from "../../components/DefaultInput/DefaultInput/DefaultInput";
import Password from "../../components/DefaultInput/Password";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/actions";
import * as yup from "yup";
import { Formik } from "formik";

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  //login post
  const handleLogin = async (values) => {
    const requestBody = {
      username: values.email,
      password: values.password,
    };
    try {
      const response = await fetch("http://10.0.2.2:5007/Auth/Login", {
        method: "POST",
        headers: {
          Accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response && response.ok) {
        const data = await response.json();
        dispatch(login(data));
        const token = data.data.accessToken;
        await AsyncStorage.setItem("token", token);
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong...");
    }
  };
  //form validation
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  return (
    <Layout>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <SafeAreaView style={styles.inputContainer}>
              <View style={styles.defaultView}>
                <Text style={styles.label}>Email</Text>
                <DefaultInput
                  name={"email"}
                  onBlur={handleBlur("email")}
                  onChangeText={handleChange("email")}
                />
                {errors.email && touched.email && (
                  <Text style={{ color: "red", opacity: 0.4 }}>
                    {errors.email}
                  </Text>
                )}
              </View>
              <View style={styles.defaultView}>
                <Text style={styles.label}>Password</Text>
                <Password
                  name={"password"}
                  onBlur={handleBlur("password")}
                  onChangeText={handleChange("password")}
                />
                {errors.password && touched.password && (
                  <Text style={{ color: "red", opacity: 0.4 }}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.defaultView}>
                  <TouchableOpacity
                    style={styles.signInButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.defaultButtonText}>Sign In</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.defaultView}>
                  <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text style={styles.defaultButtonText}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          )}
        </Formik>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginTop: "20%",
  },
  inputContainer: {
    flex: 1,
    width: 240,
    rowGap: 12,
    marginTop: "30%",
  },
  logo: {
    width: 196,
    height: 100,
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    color: "#FF9956",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  defaultView: {
    flex: 2,
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
    flex: 4,
    flexDirection: "row",
    marginTop: "50%",
  },
});
