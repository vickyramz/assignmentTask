/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from "react";
import { View, Text, Button } from "react-native";
import PlatformDetails from "../../../components/PlatformDetails";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
const Platform = (props) => {
  const getName = useSelector((state) => state.TitleReducer);
  const { colors } = useTheme();
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTitle: global.const.platform,
      headerRight: () => (
        <View style={{ paddingRight: 10 }}>
          <Text style={{ color: colors.text }}>
            {getName && getName.Name ? getName.Name : ""}
          </Text>
        </View>
      ),
    });
  }, []);
  return <PlatformDetails props={props} name={getName} />;
};

export default Platform;
