import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Home,
  Favorites,
  Orders,
  Profile,
  ProductScreen,
} from "../../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AuthRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
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
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={30} color={focused ? color : "gray"} />
          ),
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: "#FF9956",
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="heart" size={28} color={focused ? color : "gray"} />
          ),
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: "#FF9956",
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
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
