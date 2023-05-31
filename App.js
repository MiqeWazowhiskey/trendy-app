import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/store";
import UserRouter from "./components/Router/UserRouter";
import AuthRouter from "./components/Router/AuthRouter";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </QueryClientProvider>
  );
}

const MainRouter = () => {
  let user = useSelector((state) => state.user);

  return user.user ? <AuthRouter /> : <UserRouter />;
};
