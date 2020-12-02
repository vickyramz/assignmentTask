/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../containers/styles/welcomeStyles/welcomeStyle";
import * as BindActions from "../../source/redux/actions";
import DeviceInfo from "react-native-device-info";
function Welcome(props) {
  const getName = useSelector((state) => state.TitleReducer);
  const { colors } = useTheme();
  const [device, setdevice] = useState("");
  useEffect(() => {
    DeviceInfo.isEmulator().then((isEmulator) => {
      if (isEmulator) {
        setdevice("Simulator");
      } else {
        DeviceInfo.getDeviceName().then((deviceName) => {
          setdevice(deviceName);
        });
      }
    });
  }, []);
  if (getName && getName.savedSuccess) {
    getName.savedSuccess = !getName.savedSuccess;
    props.props.navigation.navigate("HomeScreen");
  }
  const makeAlert = () => setvisible(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>
          Application running on :{device}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Welcome;
