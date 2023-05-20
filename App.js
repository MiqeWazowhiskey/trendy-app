import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserRouter from "./components/Router/UserRouter";
import AuthRouter from "./components/Router/AuthRouter";
const Stack = createNativeStackNavigator();
let dummyUser = false;
export default function App() {
  return <>{dummyUser ? <AuthRouter /> : <UserRouter />}</>;
}
