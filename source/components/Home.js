/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import styles from "../containers/styles/homeStyles/homestyle";
import { Button } from "react-native-paper";
import SwipeButton from "rn-swipe-button";
import arrowRight from "../assets/diamond.png";
import Icon from "react-native-vector-icons/FontAwesome";
function Home(props) {
  const { colors } = useTheme();
  const TwitterIcon = () => <Icon name="twitter" color="#3b5998" size={30} />;
  useEffect(() => {}, []);
  const defaultStatusMessage = "swipe status appears here";
  const [swipeStatusMessage, setSwipeStatusMessage] = useState(
    defaultStatusMessage
  );
  function navigationAction() {
    props.props.navigation.navigate("Platform");
  }
  const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.buttonStyle}>
          <Button
            style={[{ backgroundColor: colors.background }]}
            mode="contained"
          >
            {global.const.NEXT_BUTTON}
          </Button>
        </View>
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => navigationAction()}
            style={[
              styles.coloredButton,
              { backgroundColor: colors.ButtonColor1 },
            ]}
            mode="contained"
          >
            {global.const.NEXT_BUTTON}
          </Button>
        </View>
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => navigationAction()}
            style={[
              styles.coloredButton,
              { backgroundColor: colors.ButtonColor2 },
            ]}
            mode="contained"
          >
            {global.const.NEXT_BUTTON}
          </Button>
        </View>
        <View style={styles.buttonStyle}>
          <SwipeButton
            shouldResetAfterSuccess={true}
            railBackgroundColor={colors.ButtonColor1}
            railFillBackgroundColor={colors.ButtonColor2}
            titleColor={"#5482b5"}
            title={"Slide me to continue"}
            railStyles={{
              backgroundColor: colors.ButtonColor2,
              borderColor: colors.ButtonColor2,
            }}
            thumbIconBackgroundColor={colors.ButtonColor2}
            thumbIconComponent={TwitterIcon}
            onSwipeStart={() => updateSwipeStatusMessage("Swipe started!")}
            onSwipeFail={() => updateSwipeStatusMessage("Incomplete swipe!")}
            onSwipeSuccess={() => navigationAction()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
