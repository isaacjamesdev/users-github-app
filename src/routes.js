import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/main/Main";
import User from "./pages/user/User";
const Stack = createStackNavigator();

const screenOptions = {
  headerTitleAlign: "center",
  headerBackTitleVisible: true,
  headerStyle: {
    backgroundColor: "#7159c1"
  },
  cardStyle: { backgroundColor: '#002757' },
  backgroundColor: "#ccc",
  headerTintColor: "#FFF"
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
