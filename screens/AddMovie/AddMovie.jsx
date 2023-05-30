import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Layout } from "../../components";
import * as yup from "yup";
import { Formik } from "formik";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { SafeAreaView } from "react-native-safe-area-context";
import DefaultInput from "../../components/DefaultInput/DefaultInput/DefaultInput";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGetGenres from "../../hooks/useGetGenres";
const validationSchema = yup.object().shape({
  title: yup.string().required("Name required..."),
  imageURL: yup
    .string()
    .url("Please type valid url...")
    .required("Image Required"),
  description: yup.string(),
  price: yup
    .number()
    .integer("Please type integer")
    .required("Price is required..."),
});
export default function AddMovie({ navigation }) {
  const genres = useGetGenres();
  const postData = async (values) => {
    const body = {
      title: values.title,
      description: values.description,
      price: values.price,
      genre: 1,
      imageURL: values.imageURL,
    };
    try {
      const token = await AsyncStorage.getItem("token");
      await fetch("http://10.0.2.2:5007/api/Movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (err) {
      console.log(err);
      alert("Something went wrong...");
    }
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.addMovieText}>Add Movie</Text>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            title: "",
            imageURL: "",
            description: "",
            price: 0,
            checkboxes: {
              action: false,
              horror: false,
              thriller: false,
              comedy: false,
              drama: false,
              documentary: false,
            },
          }}
          onSubmit={(values) => {
            postData(values);
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
              <Text style={styles.defaultText}>Movie Name</Text>
              <DefaultInput
                name="title"
                onBlur={handleBlur("title")}
                onChangeText={handleChange("title")}
              />
              {errors.title && touched.title && (
                <Text
                  style={{
                    color: "red",
                    opacity: 0.4,
                    marginBottom: 12,

                    textAlign: "center",
                  }}
                >
                  {errors.title}
                </Text>
              )}
              <Text style={styles.defaultText}>Image URL</Text>
              <DefaultInput
                name="imageURL"
                onBlur={handleBlur("imageURL")}
                onChangeText={handleChange("imageURL")}
              />
              {errors.imageURL && touched.imageURL && (
                <Text
                  style={{
                    color: "red",
                    opacity: 0.4,
                    marginBottom: 12,
                    textAlign: "center",
                  }}
                >
                  {errors.imageURL}
                </Text>
              )}
              <Text style={styles.defaultText}>Price</Text>
              <DefaultInput
                name="price"
                onBlur={handleBlur("price")}
                onChangeText={handleChange("price")}
                keyboardType={"numeric"}
              />
              {errors.price && touched.price && (
                <Text
                  style={{
                    color: "red",
                    opacity: 0.4,
                    marginBottom: 12,
                    textAlign: "center",
                  }}
                >
                  {errors.price}
                </Text>
              )}
              <Text style={styles.defaultText}>Description</Text>
              <DefaultInput
                name="description"
                onBlur={handleBlur("description")}
                onChangeText={handleChange("description")}
              />
              {errors.description && touched.description && (
                <Text
                  style={{
                    color: "red",
                    opacity: 0.4,
                    marginBottom: 12,
                    textAlign: "center",
                  }}
                >
                  {errors.description}
                </Text>
              )}
              <Text style={{ textAlign: "center", fontSize: 18, padding: 5 }}>
                Genre
              </Text>
              <BouncyCheckbox
                name="action"
                isChecked={values.checkboxes.action}
                onPress={(isChecked) => {
                  handleChange("checkboxes.action");
                }}
                onBlur={handleBlur("action")}
                style={{ padding: 3 }}
                textStyle={{ textDecorationLine: "none" }}
                text="Action"
              />
              <BouncyCheckbox
                name="horror"
                isChecked={values.checkboxes.horror}
                onPress={(isChecked) => {
                  handleChange("checkboxes.horror");
                }}
                onBlur={handleBlur("horror")}
                textStyle={{ textDecorationLine: "none" }}
                style={{ padding: 3 }}
                text="Horror"
              />
              <BouncyCheckbox
                name="thriller"
                isChecked={values.checkboxes.thriller}
                onPress={(isChecked) => {
                  handleChange("checkboxes.thriller");
                }}
                onBlur={handleBlur("thriller")}
                textStyle={{ textDecorationLine: "none" }}
                style={{ padding: 3 }}
                text="Thriller"
              />
              <BouncyCheckbox
                name="comedy"
                isChecked={values.checkboxes.comedy}
                onPress={(isChecked) => {
                  handleChange("checkboxes.comedy");
                }}
                onBlur={handleBlur("comedy")}
                textStyle={{ textDecorationLine: "none" }}
                style={{ padding: 3 }}
                text="Comedy"
              />
              <BouncyCheckbox
                name="drama"
                isChecked={values.checkboxes.drama}
                onPress={(isChecked) => {
                  handleChange("drama");
                }}
                onBlur={handleBlur("checkboxes.drama")}
                textStyle={{ textDecorationLine: "none" }}
                style={{ padding: 3 }}
                text="Drama"
              />
              <BouncyCheckbox
                name="documentary"
                isChecked={values.checkboxes.documentary}
                onPress={(isChecked) => {
                  handleChange("checkboxes.documentary");
                }}
                onBlur={handleBlur("documentary")}
                textStyle={{ textDecorationLine: "none" }}
                style={{ padding: 3 }}
                text="Documentary"
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.addMovieButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.addText}>Add Movie</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.goBackButton}
                  onPress={() => navigation.dispatch(CommonActions.goBack())}
                >
                  <Text style={styles.addText}>Back</Text>
                </TouchableOpacity>
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
    marginTop: "8%",
  },
  addMovieText: {
    fontWeight: "bold",
    fontSize: 32,
  },
  addMovieButton: {
    width: 96,
    height: 48,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 12,
  },
  addText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  defaultText: {
    color: "gray",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: "12%",
    marginBottom: "12%",
  },
  goBackButton: {
    width: 96,
    height: 48,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#FF9956",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 12,
  },
});
