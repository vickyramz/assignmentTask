/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { whiteTheme, DarkTheme } from "../themes";
import { HeaderBackButton } from "@react-navigation/stack";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import WelcomeScreen from "../containers/views/AuthFlow/WelcomeScreen";
import HomeScreen from "../containers/views/AuthFlow/HomeScreen";
import Platform from "../containers/views/AuthFlow/PlatformDetails";
import { useTheme } from "@react-navigation/native";
const Stack = createStackNavigator();
const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
function RootNavigator() {
  const { colors } = useTheme();
  //screens before loggedIn stack
  const authscreens = {
    Welcome: WelcomeScreen,
    HomeScreen: HomeScreen,
    Platform: Platform,
  };
  //function for creating stackscreen
  function AuthStack() {
    return (
      <Stack.Navigator headerMode={"float"}>
        {Object.entries({
          ...authscreens,
        }).map(([name, component]) => (
          <Stack.Screen name={name} component={component} />
        ))}
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"AuthStack"} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;
