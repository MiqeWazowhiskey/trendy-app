import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/actions";
export default function Home() {
  const dispatch = useDispatch();
  return (
    <Layout>
      <TouchableOpacity
        onPress={() => {
          dispatch(logout());
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </Layout>
  );
}

const styles = StyleSheet.create({});
