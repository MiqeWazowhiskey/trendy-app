import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/store";
import UserRouter from "./components/Router/UserRouter";
import AuthRouter from "./components/Router/AuthRouter";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

const MainRouter = () => {
  let dummyUser = useSelector((state) => state.user);

  return dummyUser ? <AuthRouter /> : <UserRouter />;
};
