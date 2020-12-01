/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from "react";
import { View, Text, Button } from "react-native";
import HomeComponent from "../../../components/Home";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
const HomeScreen = (props) => {
  const getName = useSelector((state) => state.TitleReducer);
  const { colors } = useTheme();
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTitle: global.const.HomeTitle,
      headerRight: () => (
        <View>
          <Text style={{ color: colors.text }}>
            {getName && getName.Name ? getName.Name : ""}
          </Text>
        </View>
      ),
    });
  }, []);
  return <HomeComponent name={getName} />;
};

export default HomeScreen;
