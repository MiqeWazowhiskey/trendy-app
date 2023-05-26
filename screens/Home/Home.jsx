import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/actions";
import { ProductCard } from "../../components";
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
      <ProductCard
        product={{
          label: "Example",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "12.00",
          picture:
            "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        }}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({});
