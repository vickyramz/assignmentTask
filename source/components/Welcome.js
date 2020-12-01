/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Animated, Easing, SafeAreaView, View, Dimensions } from "react-native";
const WIDTH = Dimensions.get("window").width;
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../containers/styles/welcomeStyles/welcomeStyle";
import { TextInput, Button, Snackbar } from "react-native-paper";
import * as BindActions from "../../source/redux/actions";
function Welcome(props) {
  const [Name, setName] = useState("");
  const dispatch = useDispatch();
  const [visible, setvisible] = useState(false);
  const [greenSnack, setgreenSnack] = useState(false);
  const getName = useSelector((state) => state.TitleReducer);
  const { colors } = useTheme();
  useEffect(() => {}, []);
  const navigationAction = () => {
    if (Name === "") {
      makeAlert();
      return;
    }
    dispatch(BindActions.setName(Name));
  };
  if (getName && getName.savedSuccess) {
    getName.savedSuccess = !getName.savedSuccess;
    props.props.navigation.navigate("HomeScreen");
  }
  const makeAlert = () => setvisible(true);
  const onDismissSnackBar = () => setvisible(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View>
          <TextInput
            mode={"flat"}
            placeholderTextColor={colors.text}
            label={global.const.place_Holder}
            value={Name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View>
          <Button mode="contained" onPress={() => navigationAction()}>
            {global.const.NEXT_BUTTON}
          </Button>
        </View>
        <Snackbar
          style={{
            backgroundColor: !greenSnack ? colors.snackBarBac : "green",
          }}
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: !greenSnack ? "Undo" : "",
            onPress: () => {
              // Do something
            },
          }}
        >
          {!greenSnack ? "please Enter Name" : "Name saved successfully"}.
        </Snackbar>
      </View>
    </SafeAreaView>
  );
}

export default Welcome;
