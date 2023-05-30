import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { SafeAreaView } from "react-native-safe-area-context";
import DefaultInput from "../../components/DefaultInput/DefaultInput/DefaultInput";
import Password from "../../components/DefaultInput/Password";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/actions";
//form validation
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  reenterPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Passwords must match"),
});

export default function Register() {
  //redux state
  const dispatch = useDispatch();

  //register POST
  const handleRegister = async (values) => {
    const requestBody = {
      username: values.email,
      password: values.password,
    };
    try {
      const res = await fetch("http://10.0.2.2:5007/Auth/Register", {
        method: "POST",
        headers: {
          Accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (res.ok) {
        dispatch(login({ requestBody }));
      }
    } catch (err) {
      alert("Something went wrong...");
    }
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Formik
          initialValues={{ email: "", password: "", reenterPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={(data) => {
            handleRegister(data);
          }}
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
                  name="email"
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
                  name="password"
                  onBlur={handleBlur("password")}
                  onChangeText={handleChange("password")}
                />
                {errors.password && touched.password && (
                  <Text style={{ color: "red", opacity: 0.4 }}>
                    {errors.password}
                  </Text>
                )}
              </View>
              <View style={styles.defaultView}>
                <Text style={styles.label}>Reenter Password</Text>
                <Password
                  name="reenterPassword"
                  onBlur={handleBlur("reenterPassword")}
                  onChangeText={handleChange("reenterPassword")}
                />
                {errors.reenterPassword && touched.reenterPassword && (
                  <Text style={{ color: "red", opacity: 0.4 }}>
                    {errors.reenterPassword}
                  </Text>
                )}
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.defaultView}>
                  <TouchableOpacity
                    style={styles.registerButton}
                    onPress={handleSubmit}
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
    rowGap: 72,
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
    backgroundColor: "#EF4444",
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
  },
});
