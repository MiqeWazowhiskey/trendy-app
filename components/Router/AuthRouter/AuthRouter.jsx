import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Home,
  Favorites,
  Orders,
  Profile,
  ProductScreen,
  AddMovie,
} from "../../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AuthRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="AddMovieScreen" component={AddMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: { height: 52 },
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={30} color={focused ? color : "gray"} />
          ),
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: "#FF9956",
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Favorites}
        options={{
          tabBarStyle: { height: 52 },
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="local-movies"
              size={28}
              color={focused ? color : "gray"}
            />
          ),
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: "#FF9956",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Orders}
        options={{
          tabBarStyle: { height: 52 },
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Entypo
              name="shopping-cart"
              size={28}
              color={focused ? color : "gray"}
            />
          ),
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: "#FF9956",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: { height: 52 },
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="person"
              size={28}
              color={focused ? color : "gray"}
            />
          ),
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: "#FF9956",
        }}
      />
    </Tab.Navigator>
  );
}
